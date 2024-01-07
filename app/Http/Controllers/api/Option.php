<?php

namespace App\Http\Controllers\api;

use App\Constant\BillTag;
use App\Jobs\ExitOptionOrder;
use App\Models\Member;
use App\Models\OptionSetting;
use App\Models\UserOptionOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Option extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
    }

    function setting(Request $request)
    {
        $list = OptionSetting::query()->get();
        return $this->success('success', $list);
    }

    function option_order(Request $request)
    {
        try {
            $data = $request->validate([
                'symbol' => 'required',
                'quantity' => 'required',
                'time_id' => 'required|exists:option_settings,id',
                'type' => 'required|in:0,1'],
                [
                    'symbol.required' => __('option.symbol_required'),
                    'quantity.required' => __('option.quantity_required'),
                    'time_id.required' => __('option.time_id_required'),
                    'time_id.exists' => __('option.time_id_exists'),
                    'type.required' => __('option.type_required'),
                    'type.in' => __('option.type_in'),
                ]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }

        $symbol = $data['symbol'];
        $market = \App\Models\Market::query()->where('symbol', $symbol)->first();

        if (!$market) {
            return $this->error(__('option.symbol_required_exists'));
        }

        $time = OptionSetting::query()->find($data['time_id']);

        if (!$time) {
            return $this->error(__('option.down_order_exists'));
        }

        $quantity = $data['quantity'];
        $type = $data['type'];

        $orderNo = get_order_sn($market['full_name']);

        $buy_price = get_now_price($market['symbol']);

        DB::beginTransaction();
        try {

            $order = UserOptionOrder::query()->create([
                'member_id' => $request->user()->id,
                'market_id' => $market['id'],
                'time_id' => $time['id'],
                'quantity' => $quantity,
                'type' => $type,
                'hold_time' => $time['time'],
                'order_num' => $orderNo,
                'buy_price' => $buy_price,
                'rate' => $time['rate'],
                'lose_rate' => $time['lose_rate'],
            ]);

            //扣除用户余额
            Member::money(-$quantity, $request->user()->id, BillTag::OptionsPositionAmount);

            //发送延迟队列以处理订单
            ExitOptionOrder::dispatch($order['id'])->delay($time['time'])->onQueue('option_order');
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error($e->getMessage());
        }
        return $this->success('success');
    }

    function option_order_history(Request $request)
    {
        $status = $request->input('status', 0);

        $list = UserOptionOrder::query()->with('market')->where(['member_id' => $request->user()->id, "status" => $status])->orderByDesc('id')->paginate(10);
        foreach ($list as $item) {
            $item->all_fee = PriceCalculate($item->buy_fee, '+', $item->sell_fee, 6);
        }
        return $this->success('success', $list);
    }
}
