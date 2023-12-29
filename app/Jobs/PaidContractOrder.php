<?php

namespace App\Jobs;

use App\Models\UserContractOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class PaidContractOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * 任务可以尝试的最大次数。
     *
     * @var int
     */
    public $tries = 3;

    protected $order_id;

    /**
     * Create a new job instance.
     */
    public function __construct($id)
    {
        //
        $this->order_id = $id;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $order = UserContractOrder::query()->with('market')->where(['id' => $this->order_id])->first();

        //如果订单不存在 则直接删除任务
        if (!$order) {
            $this->delete();
            return;
        }

        //如果订单状态不为待处理 则直接删除任务
        if ($order->status !== 0) {
            $this->delete();
            return;
        }

        $market = $order->market;

        $symbol = $market['symbol'] . 't';

        $symbol = str_replace("-", "", $symbol);
        $close = get_now_price($symbol);

        $paid_price = intval($order['paid_price']);

        //如果与订单价格不一致 则重新发布任务
        if ($paid_price != 0 && $close != $paid_price) {
            $this->release();
            return;
        } else {
            //市场价成交
            $order->paid_price = $close;
            $order->status = 1;
            $order->save();

            //如果存在止盈止损 则发送止盈止损任务
            if ($order->stop_loss != 0 || $order->stop_surplus != 0) {
                $this->dispatch(new StopLossOrder($order->id));
            }
        }
    }
}
