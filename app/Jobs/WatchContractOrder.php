<?php

namespace App\Jobs;

use App\Models\UserContractOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

//监控合约订单
class WatchContractOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //获取所有待平仓的订单
        $orders = UserContractOrder::query()->with('market')->where(['status' => 1])->get();
        foreach ($orders as $order) {
            //如果订单状态不为待处理 则直接删除任务
            if ($order['status'] !== 1) {
                continue;
            }

            StopLossOrder::dispatch($order['id']);
        }
        $this->delete();
    }
}
