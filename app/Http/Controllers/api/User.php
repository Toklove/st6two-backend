<?php

namespace App\Http\Controllers\api;

use App\Models\Currency;
use Illuminate\Http\Request;

class User extends BaseApi
{
    //
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => []]);
    }

    function update(Request $request)
    {
        $post = $request->validate([
            'nickname' => 'required',
            'avatar' => 'required',
        ]);

        //更新用户信息
        $user = $this->auth->user();
        $user->nickname = $post['nickname'];
        $user->avatar = $post['avatar'];
        $user->save();

        return $this->success('success', $user);
    }

    function getCurrency()
    {
        //获取币种
        $currencies = Currency::all();
        return $this->success('success', $currencies);
    }
}
