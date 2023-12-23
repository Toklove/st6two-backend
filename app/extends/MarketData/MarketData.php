<?php

namespace App\extends\MarketData;

use PolygonIO\Rest\Rest;

class MarketData
{
    private static $instance;

    public function __construct()
    {
    }


    public static function getInstance()
    {
        if (!(self::$instance instanceof self)) {
            self::$instance = new Rest(env('POLYGON_API_KEY'));
        }
        return self::$instance;
    }

    private function __clone()
    {
    }
}
