<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class ContactPin implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private mixed $market;
    private mixed $time;
    private mixed $low;
    private mixed $high;
    private mixed $startAt;

    /**
     * Create a new job instance.
     */
    public function __construct($market, $time, $low, $high, $startAt)
    {
        $this->market = $market;
        $this->time = $time;
        $this->low = $low;
        $this->high = $high;
        $this->startAt = $startAt;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //如果任务没到期则重新加入队列
        if ($this->time > now()) {
            ContactPin::dispatch($this->market, $this->time, $this->low, $this->high, $this->startAt);
            //获取timestamp大于startAt的数据 并根据id排序
            $list = DB::connection('mongodb')->collection($this->market->symbol)->where('timestamp', '>', $this->startAt)->get();

            $redisKey = 'market_' . $this->market->symbol;
            $hasList = Cache::get($redisKey);
            $hasIds = [];
            if ($hasList) {
                $hasList = json_decode($hasList, true);
                foreach ($hasList as $item) {
                    $hasIds[] = $item['_id'];
                }
            }
            foreach ($list as $item) {
                //如果当前Item存在于redis中则跳过
                if ($hasList && in_array($item['_id'], $hasIds)) {
                    continue;
                }

                //根据最高价和最低价生成一个随机数 为当前收盘价
                $item['close'] = rand($this->low, $this->high);
                $item['high'] = $this->high;
                $item['low'] = $this->low;
                //将数据更新到mongodb中
                DB::connection('mongodb')->collection($this->market->symbol)->where('id', $item['_id'])->update($item);
            }
            //将数据存入redis中
            $redisData = json_encode($list);
            Cache::set($redisKey, $redisData);
        }
    }
}
