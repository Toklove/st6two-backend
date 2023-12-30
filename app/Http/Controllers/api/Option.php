<?php

namespace App\Http\Controllers\api;

use App\Models\OptionSetting;
use Illuminate\Http\Request;

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
            $data = $request->validate(['symbol' => 'required', 'quantity' => 'required', 'time_id' => 'required|exists:option_settings,id', 'type' => 'required|in:0,1'], [
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


    }
}
