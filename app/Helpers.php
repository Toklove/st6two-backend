<?php

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
        $symbol = str_replace("-", "", $symbol);
        $symbol = strtolower($symbol) . 't';
        $coinApi = "https://api.huobi.pro/market/history/kline?period=1day&size=1&symbol=" . $symbol;
        $result = get_market_api($coinApi);

        $price_arr = $result['data'][0];
        $close = $price_arr['close']; //现价
        return $close;
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
        $result = json_decode(curl_exec($ch), true);
        return $result;
    }
}


if (!function_exists("randFloat")) {
    function randFloat($min = 0, $max = 1)
    {
        return round($min + mt_rand() / mt_getrandmax() * ($max - $min), 2);
    }
}
