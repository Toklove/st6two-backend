<?php

namespace App\Http\Controllers\api;

use App\Models\Market;
use App\Models\News;

class Index extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
    }

    function news()
    {
        $newsList = News::orderBy('id', 'desc')->get();
        return $this->success('success', $newsList);
    }

    function hot_pair()
    {
        $hotList = Market::query()->where('hot', 1)->get();
        return $this->success('success', $hotList);
    }
}
