<?php

namespace App\Http\Controllers\api;

use App\Models\Currency;
use App\Models\UserCryptoAddress;
use App\Models\UserCryptoWallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class User extends BaseApi
{
    //
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => []]);
    }

    function addBank(Request $request)
    {
        $post = $request->validate([
            'bank_name' => 'required',
            'account' => 'required',
            'account_user' => 'required',
            'bank_address' => 'required',
            'bank_code' => 'required',
        ]);
        $userBank = new \App\Models\UserBank();
        $userBank->member_id = $this->auth->id();
        $userBank->fill($post);
        $userBank->save();

        return $this->success('success', $userBank);
    }

    function addWallet(Request $request)
    {
        $post = $request->validate(['currency_id' => 'required|integer|exists:currencies,id', 'address' => 'required']);
        $userCryptoWallet = new UserCryptoWallet();
        $userCryptoWallet->member_id = $this->auth->id();
        $userCryptoWallet->currency_id = $post['currency_id'];
        $userCryptoWallet->address = $post['address'];
        $userCryptoWallet->save();

        return $this->success('success', $userCryptoWallet);
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
        foreach ($currencies as $currency) {
            $currency['address'] = UserCryptoAddress::query()->where(['member_id' => $this->auth->id(), 'currency_id' => $currency->id])->value('address');
        }
        return $this->success('success', $currencies);
    }

    function bankList()
    {
        $list = \App\Models\UserBank::query()->where('member_id', $this->auth->id())->get();
        return $this->success('success', $list);
    }

    function cryptoList()
    {
        $list = UserCryptoWallet::query()->with('currency')->where('member_id', $this->auth->id())->get();
        return $this->success('success', $list);
    }

    function delCrypto()
    {
        $id = request()->validate(['id' => 'required|integer|exists:user_crypto_wallet,id']);
        $del = UserCryptoWallet::query()->where(['id' => $id, 'member_id' => $this->auth->id()])->delete();
        if ($del) {
            return $this->success('删除成功');
        } else {
            return $this->error('删除失败');
        }
    }

    function delBank()
    {
        $id = request()->validate(['id' => 'required|integer|exists:user_bank,id']);
        $del = \App\Models\UserBank::query()->where(['id' => $id, 'member_id' => $this->auth->id()])->delete();
        if ($del) {
            return $this->success('删除成功');
        } else {
            return $this->error('删除失败');
        }
    }

    function changePassword(Request $request)
    {
        $post = $request->validate([
            'old_password' => 'required',
            'password' => 'required|confirmed',
        ]);
        $post['password'] = Hash::make($post['password']);

        //判断旧密码是否正确
        $user = $this->auth->user();
        if (!Hash::check($post['old_password'], $user->password)) {
            return $this->error('旧密码错误');
        }
        $user->password = $post['password'];
        $user->save();

        return $this->success('修改成功');
    }

    function logout()
    {
        //注销登录
        $this->auth->logout();
        return $this->success('注销成功');
    }
}
