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
            return $this->error('交易对不存在');
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
        $data = $request->validate(['id' => 'required|integer']);
        $id = $data['id'];
        $market = MarketModel::query()->find($id);
        if (!$market) {
            return $this->error('交易对不存在');
        }
        $like = UserLikeMarket::query()->where(['user_id' => $this->user['id'], 'market_id' => $id])->first();
        if ($like) {
            $like->delete();
            $market->is_like = false;
            return $this->success('取消收藏成功', $market);
        } else {
            UserLikeMarket::query()->create(['user_id' => $this->user['id'], 'market_id' => $id]);
            $market->is_like = true;
            return $this->success('收藏成功', $market);
        }
    }

    function category()
    {
        $list = MarketCategory::query()->get();
        return $this->success('success', $list);
    }

    function list(Request $request)
    {
        $data = $request->validate(['category_id' => 'required|integer']);
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
                'order_type.required' => '订单类型不能为空',
                'quantity.required' => '数量不能为空',
                'order_price.required' => '订单价格不能为空',
                'stop_surplus.numeric' => '止盈价格必须为数字',
                'stop_loss.numeric' => '止损价格必须为数字',
                'lever.required' => '杠杆不能为空',
            ]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }


        $symbol = $data['symbol'];
        $market = MarketModel::query()->where('symbol', $symbol)->first();

        if (!$market) {
            return $this->error('交易对不存在');
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
            return $this->success('下单成功', $order);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error("下单失败", $e->getMessage());
        }
    }

    function contract_order_history()
    {
        $list = UserContractOrder::query()->with('market')->where(['member_id' => $this->user['id'], "status" => 2])->paginate(15);
        return $this->success('success', $list);
    }
}
