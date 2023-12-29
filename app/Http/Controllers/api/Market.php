<?php

namespace App\Http\Controllers\api;

use App\Constant\BillTag;
use App\Jobs\PaidContractOrder;
use App\Models\Market as MarketModel;
use App\Models\MarketCategory;
use App\Models\Member;
use App\Models\UserContractOrder;
use App\Models\UserLikeMarket;
use Exception;
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
        } catch (Exception $e) {
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
        } catch (Exception $e) {
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

        } catch (Exception $e) {
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
                'quantity' => 'required|numeric',
                'order_price' => 'required|numeric',
                'stop_surplus' => 'numeric',
                'stop_loss' => 'numeric',
                'lever' => 'required|numeric',
            ], [
                'symbol.required' => __('market.symbol_required'),
                'order_type.required' => __('market.order_type_required'),
                'quantity.required' => __('market.quantity_required'),
                'quantity.numeric' => __('market.quantity_numeric'),
                'order_price.required' => __('market.order_price_required'),
                'stop_surplus.numeric' => __('market.stop_surplus_numeric'),
                'stop_loss.numeric' => __('market.stop_loss_numeric'),
                'lever.required' => __('market.lever_required'),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }

        $symbol = $data['symbol'];
        $market = MarketModel::query()->where('symbol', $symbol)->first();

        if (!$market) {
            return $this->error(__('api.market.symbol_required'));
        }

        $unit_amount = $market->unit_amount; // 合约单价

        $unit_fee = PriceCalculate($unit_amount, '*', $market['buy_fee'], 5); // 单张合约手续费
        // 计算出所需保证金
        $freeze_balance = PriceCalculate(($data['quantity'] * $unit_amount), '/', $data['lever'], 5);
        $freeze_fee = PriceCalculate($data['quantity'], '*', $unit_fee, 5);

        $order_num = get_order_sn($market['full_name']);

        $orderData = [
            'member_id' => $this->user['id'],
            'market_id' => $market['id'],
            'type' => $data['order_type'],
            'quantity' => $data['quantity'],
            'paid_price' => $data['order_price'],
            'stop_loss' => $data['stop_loss'],
            'lever' => $data['lever'],
            'order_num' => $order_num,
            'buy_fee' => $freeze_fee,
            'assure' => $freeze_balance,
        ];

        DB::beginTransaction();
        try {
            $order = UserContractOrder::query()->create($orderData);

            //扣除保证金余额以及下单手续费
            Member::money(-$freeze_balance, $this->user['id'], BillTag::ContractPositionAmount);
            Member::money(-$freeze_fee, $this->user['id'], BillTag::ContractPositionOpeningFee);

            //加入处理队列 TODO 测试期间不区分队列
            PaidContractOrder::dispatch($order->id)//                ->onQueue('contract_order')
            ;

            DB::commit();
            return $this->success(__('api.market.order_placed_successful'), $order);
        } catch (Exception $e) {
            DB::rollBack();
            return $this->error(__('api.market.order_placed_successfully'), $e->getMessage());
        }
    }

    function contract_order_history()
    {
        $list = UserContractOrder::query()->with('market')->where(['member_id' => $this->user['id'], "status" => 2])->orderByDesc('id')->paginate(10);
        return $this->success('success', $list);
    }

    function hand_close_contract(Request $request)
    {
        //手动平仓
        try {
            $data = $request->validate(['id' => 'required|integer'], ['id.required' => __('api.market.id_required')]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }

        $order = UserContractOrder::query()->with('market')->where(['id' => $data['id'], 'member_id' => $this->user['id']])->first();
        if (!$order) {
            return $this->error(__('api.market.order_does_not_exist'));
        }

        $market = $order->market;

        $symbol = $market['symbol'] . 't';

        $symbol = str_replace("-", "", $symbol);

        $close = get_now_price($symbol . 't');

        $result = exitContractTrade(3, $order['id'], $close);

        if ($result) {
            return $this->success(__('api.market.order_placed_successfully'));
        } else {
            return $this->error(__('api.market.order_placed_successfully'));
        }
    }
}
