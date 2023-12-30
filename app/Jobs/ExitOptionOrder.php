<?php

namespace App\Jobs;

use App\Constant\BillTag;
use App\Models\Member;
use App\Models\UserOptionOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class ExitOptionOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private mixed $order_id;

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
        //
        $order = UserOptionOrder::query()->with('market')->find($this->order_id);
        if (!$order) {
            $this->delete();
            return;
        }

        if ($order['status'] != 0) {
            $this->delete();
            return;
        }

        $order->status = 1;

        $market = $order->market;

        if ($order["set_price"]) {
            $price = $order["set_price"];
        } else {
            $price = get_now_price($market['symbol']);
        }

        $is_win = 0;
        $order->sell_price = $price;
        $order->sell_time = date('Y-m-d H:i:s');

        //判断盈利
        if ($order['type'] == 0 && $order['sell_price'] > $order['buy_price']) {
            $is_win = 1;
        } elseif ($order['type'] == 1 && $order['sell_price'] < $order['buy_price']) {
            $is_win = 1;
        }

        //结果已知 执行后续操作
        $num = $order['quantity'];
        $profit = 0;
        $amount = 0;
        if ($is_win == 0) {
            $profit = $num * $order['loss_rate'];
            $amount = $num - $profit;
        } elseif ($is_win == 1) {
            $profit = $num * $order['rate'];
            $amount = $num + $profit;
        }

        $order['is_win'] = $is_win;
        $order['status'] = 1;
        $order['profit'] = $profit;

        DB::beginTransaction();
        try {
            //保存订单
            $order->save();
            
            //发放余额
            Member::money($amount, $order->member_id, BillTag::OptionsSettlementAmount);
            DB::commit();
            $this->delete();
        } catch (\Exception $e) {
            DB::rollBack();
            $this->release();
        }
    }
}
