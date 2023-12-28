<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Market;
use App\Models\News;
use Illuminate\Http\Request;

class Index extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => ['news','hot_pair']]);
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
