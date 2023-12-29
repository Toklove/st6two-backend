<?php

namespace App\Jobs;

use App\Models\UserContractOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class StopLossOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private mixed $order_id;

    /**
     * Create a new job instance.
     */
    public function __construct($id)
    {
        $this->order_id = $id;
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $order = UserContractOrder::query()->with('market')->where(['id' => $this->order_id])->first();

        if (!$order) {
            $this->delete();
            return;
        }

        if ($order->status !== 1) {
            $this->delete();
            return;
        }

        $market = $order->market;

        //获取当前市场价格
        $close = get_now_price($market['symbol']);

        $stop_loss = intval($order['stop_loss']);
        $stop_surplus = intval($order['stop_surplus']);

        if (($stop_loss !== 0 && $order['stop_loss'] >= $close) || ($stop_surplus !== 0 && $order['stop_surplus'] <= $close)) {
            //触发止损止盈
            exitContractTrade(1, $order['id'], $close);
        }
        //强制平仓
//        ContractTool::flatPrice();
    }
}
