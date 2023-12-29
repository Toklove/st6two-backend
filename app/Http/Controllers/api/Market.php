<?php

namespace App\Http\Controllers\api;

use App\Models\Market as MarketModel;
use App\Models\MarketCategory;
use App\Models\UserContractOrder;
use App\Models\UserLikeMarket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Market extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => []]);
    }

    function market_info(Request $request)
    {

        try {
            $data = $request->validate(['symbol' => 'required|string'], [
                'symbol.required' => __('api.market.symbol_required'),
            ]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
        $symbol = $data['symbol'];
        $market = MarketModel::query()->where('symbol', $symbol)->first();

        if (!$market) {
            return $this->error(__('api.market.symbol_required'));
        }

        $like = UserLikeMarket::query()->where(['user_id' => $this->user['id'], 'market_id' => $market['id']])->first();
        if ($like) {
            $market->is_like = true;
        } else {
            $market->is_like = false;
        }

        return $this->success('success', $market);
    }

    function like(Request $request)
    {
        try {
            $data = $request->validate(['id' => 'required|integer'],
                ['id.required' => __('api.market.symbol_required')]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
        $id = $data['id'];
        $market = MarketModel::query()->find($id);
        if (!$market) {
            return $this->error(__('api.market.symbol_required'));
        }
        $like = UserLikeMarket::query()->where(['user_id' => $this->user['id'], 'market_id' => $id])->first();
        if ($like) {
            $like->delete();
            $market->is_like = false;
            return $this->success(__('api.market.collection_successfully'), $market);
        } else {
            UserLikeMarket::query()->create(['user_id' => $this->user['id'], 'market_id' => $id]);
            $market->is_like = true;
            return $this->success(__('api.market.collection successful'), $market);
        }
    }

    function category()
    {
        $list = MarketCategory::query()->get();
        return $this->success('success', $list);
    }

    function list(Request $request)
    {
        try {
            $data = $request->validate(['category_id' => 'required|integer'],
                ["category_id_required" => __('api.market.category_id_required')]);

        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
        $list = MarketModel::query()->where('category_id', $data['category_id'])->get();
        return $this->success('success', $list);
    }

    function contract_order(Request $request)
    {

        try {
            $data = $request->validate([
                'symbol' => 'required|string',
                'order_type' => 'required|integer',
                'quantity' => 'required|integer',
                'order_price' => 'required|numeric',
                'stop_surplus' => 'numeric',
                'stop_loss' => 'numeric',
                'lever' => 'required|numeric',
            ], [
                'symbol.required' => __('market.symbol_required'),
                'order_type.required' => __('market.order_type_required'),
                'quantity.required' => __('market.quantity_required'),
                'order_price.required' => __('market.order_price_required'),
                'stop_surplus.numeric' => __('market.stop_surplus_numeric'),
                'stop_loss.numeric' => __('market.stop_loss_numeric'),
                'lever.required' => __('market.lever_required'),
            ]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }


        $symbol = $data['symbol'];
        $market = MarketModel::query()->where('symbol', $symbol)->first();

        if (!$market) {
            return $this->error(__('api.market.symbol_required'));
        }

        $order_num = time() . rand(1000, 9999) . $market['full_name'] . rand(1000, 9999);


        DB::beginTransaction();
        try {
            $order = UserContractOrder::query()->create([
                'member_id' => $this->user['id'],
                'market_id' => $market['id'],
                'type' => $data['order_type'],
                'quantity' => $data['quantity'],
                'paid_price' => $data['order_price'],
                'stop_loss' => $data['stop_loss'],
                'lever' => $data['lever'],
                'order_num' => $order_num,
            ]);

            //TODO 扣除余额
//            Member::money();

            DB::commit();
            return $this->success(__('api.market.order_placed_successful'), $order);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error(__('api.market.order_placed_successfully'), $e->getMessage());
        }
    }

    function contract_order_history()
    {
        $list = UserContractOrder::query()->with('market')->where(['member_id' => $this->user['id'], "status" => 2])->paginate(15);
        return $this->success('success', $list);
    }
}
