<?php

namespace App\extends\Udun;

use Udun\Dispatch\UdunDispatch;

class uDun
{

    private static $instance;

    public function __construct()
    {
    }


    public static function getInstance()
    {
        if (!(self::$instance instanceof self)) {
            self::$instance = new UdunDispatch([
                'merchant_no' => env('UDUN_MERCHANT_NO'), //商户号
                'api_key' => env('UDUN_API_KEY'),//apikey
                'gateway_address' => env('UDUN_ADDRESS'), //节点
                'callUrl' => env('APP_URL') . '/api/callback', //回调地址
                'debug' => env("APP_DEBUG")  //调试模式
            ]);;
        }
        return self::$instance;
    }

    private function __clone()
    {
    }
}
