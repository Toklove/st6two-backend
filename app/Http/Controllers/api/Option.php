<?php

namespace App\Http\Controllers\api;

use App\Jobs\ExitOptionOrder;
use App\Models\OptionSetting;
use App\Models\UserOptionOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Option extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => []]);
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
            return $this->error(__('option.symbol_required'));
        }

        $time = OptionSetting::query()->find($data['time_id']);

        if (!$time) {
            return $this->error(__('option.time_id_required'));
        }

        $quantity = $data['quantity'];
        $type = $data['type'];

        $orderNo = get_order_sn($market['full_name']);

        $buy_price = get_now_price($market['symbol']);

        DB::beginTransaction();
        try {

            $order = UserOptionOrder::query()->create([
                'member_id' => $this->user['id'],
                'market_id' => $market['id'],
                'time_id' => $time['id'],
                'quantity' => $quantity,
                'type' => $type,
                'price' => $market['last_price'],
                'status' => 0,
                'hold_time' => $time['time'],
                'profit' => $time['profit'],
                'order_num' => $orderNo,
                'buy_price' => $buy_price,
            ]);

            //发送延迟队列以处理订单
            ExitOptionOrder::dispatch($order['id'])->delay($time['time'])->onQueue('option_order');
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }

    }
}
