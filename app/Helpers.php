<?php

use App\Constant\BillTag;
use App\extends\TokLove\ContractTool;
use App\Models\Member;
use App\Models\UserContractOrder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

if (!function_exists('PriceCalculate')) {
    /**
     * PHP精确计算  主要用于货币的计算用法
     * @param $n1
     * @param $symbol + - * / %
     * @param $n2
     * @param string $scale 精度 默认为小数点后两位
     * @return  string
     */
    function PriceCalculate($n1, $symbol, $n2, $scale = '2')
    {
        $res = "";
        $n1 = number_format($n1, 8, '.', '');
        $n2 = number_format($n2, 8, '.', '');
        if (function_exists("bcadd")) {
            switch ($symbol) {
                case "+"://加法
                    $res = bcadd($n1, $n2, $scale);
                    break;
                case "-"://减法
                    $res = bcsub($n1, $n2, $scale);
                    break;
                case "*"://乘法
                    if ($n1 == 0 || $n2 == 0) {
                        $res = 0;
                    } else {
                        $res = bcmul($n1, $n2, $scale);
                    }
                    break;
                case "/"://除法
                    if ($n1 == 0 || $n2 == 0) {
                        $res = 0;
                    } else {
                        $res = bcdiv($n1, $n2, $scale);
                    }
                    break;
                case "%"://求余、取模
                    $res = bcmod($n1, $n2, $scale);
                    break;
                default:
                    $res = "";
                    break;
            }
        } else {
            switch ($symbol) {
                case "+"://加法
                    $res = $n1 + $n2;
                    break;
                case "-"://减法
                    $res = $n1 - $n2;
                    break;
                case "*"://乘法
                    if ($n1 == 0 || $n2 == 0) {
                        $res = 0;
                    } else {
                        $res = $n1 * $n2;
                    }
                    break;
                case "/"://除法
                    if ($n1 == 0 || $n2 == 0) {
                        $res = 0;
                    } else {
                        $res = $n1 / $n2;
                    }
                    break;
                case "%"://求余、取模
                    $res = $n1 % $n2;
                    break;
                default:
                    $res = "";
                    break;
            }
        }
        return $res == 0 ? 0 : (float)$res;
    }
}

if (!function_exists('get_order_sn')) {
    // 生成订单编号
    function get_order_sn($prefix = '')
    {
        // 获取当前微秒数
        list($msec, $sec) = explode(" ", microtime());
        $msec = substr($msec, 2, 3);

        // 产生随机数
        $rand = mt_rand(100, 999);

        $orderSn = $prefix . $sec . $msec . $rand;

        return $orderSn;
    }
}

if (!function_exists('get_now_price')) {
    function get_now_price($symbol)
    {
        if (!$symbol) return false;
        $collection = DB::connection('mongodb')->collection($symbol)->orderBy('timestamp', 'desc')->first();
        //现价
        return $collection['close'];
    }
}

if (!function_exists("get_market_api")) {
    function get_market_api($api)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        curl_setopt($ch, CURLOPT_URL, $api);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
        $result = curl_exec($ch);

        Log::info($result);

        $result = json_decode($result, true);
        return $result;
    }
}


if (!function_exists("randFloat")) {
    function randFloat($min = 0, $max = 1)
    {
        return round($min + mt_rand() / mt_getrandmax() * ($max - $min), 2);
    }
}


if (!function_exists("exitContractTrade")) {
    //处理合约交易 1.止损止盈  2.爆仓 3.手动平仓
    function exitContractTrade($type, $order_id, $close_price = null)
    {
        $order = UserContractOrder::query()->with("market")->with('market')->where(['id' => $order_id])->first();

        if (!$order) return false;
        $order->status = 2;
        $order->close_price = $close_price;

        $market = $order->market;

        DB::beginTransaction();
        try {
            if ($type == 2) {
                $order->force_close_status = 1;


            } else {
                $unRealProfit = ContractTool::unRealProfit($order, $close_price);

                $unit_fee = PriceCalculate($market->unit_amount, '*', $market['sell_fee'], 5); // 单张合约手续费
                // 计算出所需保证金
                $sell_fee = PriceCalculate($order['quantity'], '*', $unit_fee, 5);

                //结算手续费
                Member::money($sell_fee, $order->member_id, BillTag::ContractPendingOrderHandlingFee);

                $amount = $unRealProfit + $order['assure'];

                //结算合约金额
                Member::money($amount, $order->member_id, BillTag::ContractPositionAmount);
            }
            $order->save();
            DB::commit();

            return true;
        } catch (Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
            return false;
        }
    }
}

if (!function_exists('custom_number_format')) {
    function custom_number_format($value, $decimals)
    {
        return number_format($value, $decimals, '.', '');
    }
}
