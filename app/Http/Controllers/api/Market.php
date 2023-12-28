<?php

namespace App\Http\Controllers\api;

use App\Models\Market as MarketModel;
use App\Models\UserLikeMarket;
use Illuminate\Http\Request;

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
}
