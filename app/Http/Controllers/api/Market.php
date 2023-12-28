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
        $data = $request->validate(['symbol' => 'required|string']);
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
        $data = $request->validate([
            'symbol' => 'required|string',
            'type' => 'required|integer',
            'quantity' => 'required|integer',
            'order_price' => 'required|numeric',
            'stop_surplus' => 'required|numeric',
            'stop_loss' => 'required|numeric',
            'lever' => 'required|numeric',
        ]);

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
                'type' => $data['type'],
                'quantity' => $data['quantity'],
                'paid_price' => $data['order_price'],
                'stop_loss' => $data['stop_loss'],
                'lever' => $data['lever'],
                'order_num' => $order_num,
            ]);

//            Member::money();

            DB::commit();
            return $this->success('下单成功', $order);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error("下单失败", $e->getMessage());
        }
    }
}
