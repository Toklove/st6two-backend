<?php

namespace App\Http\Controllers\api;

use App\Models\Market;
use App\Models\News;
use Illuminate\Support\Facades\Cache;

class Index extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => ['news', 'hot_pair']]);
    }

    function news()
    {
        $newsList = Cache::rememberForever('news', function () {
            return News::orderBy('id', 'desc')->get();
        });
        return $this->success('success', $newsList);
    }

    function hot_pair()
    {
        $hotList = Cache::rememberForever('hot_pair', function () {
            return Market::query()->where('hot', 1)->get();
        });
        return $this->success('success', $hotList);
    }
}
