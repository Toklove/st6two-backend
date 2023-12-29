<?php

namespace App\Http\Controllers\api;

use App\Models\Currency;
use App\Models\UserCryptoAddress;
use App\Models\UserCryptoWallet;
use Exception;
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
        try {
            $post = $request->validate([
                'bank_name' => 'required',
                'account' => 'required',
                'account_user' => 'required',
                'bank_address' => 'required',
                'bank_code' => 'required',
            ], [
                "bank_name.required" => __("api.user.bank_name_required"),
                "account.required" => __("api.user.account_required"),
                "account_user.required" => __("api.user.account_user_required"),
                "bank_address.required" => __("api.user.bank_address_required"),
                "bank_code.required" => __("api.user.bank_code_required"),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $userBank = new \App\Models\UserBank();
        $userBank->member_id = $this->auth->id();
        $userBank->fill($post);
        $userBank->save();

        return $this->success('success', $userBank);
    }

    function addWallet(Request $request)
    {
        try {
            $post = $request->validate(
                ['currency_id' => 'required|integer|exists:currencies,id', 'address' => 'required'],
                [
                    "currency_id.required" => __("api.user.currency_id_required"),
                    "currency_id.integer" => __("api.user.currency_id_integer"),
                    "currency_id.exists" => __("api.user.currency_id_exists"),
                    "address.required" => __("api.user.address_required"),
                ]
            );
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $userCryptoWallet = new UserCryptoWallet();
        $userCryptoWallet->member_id = $this->auth->id();
        $userCryptoWallet->currency_id = $post['currency_id'];
        $userCryptoWallet->address = $post['address'];
        $userCryptoWallet->save();

        return $this->success('success', $userCryptoWallet);
    }

    function update(Request $request)
    {
        try {
            $post = $request->validate([
                'nickname' => 'required',
                'avatar' => 'required',
            ], [
                "nickname.required" => __("api.user.nickname_required"),
                "avatar.required" => __("api.user.avatar_required"),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }

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
        try {
            $id = request()->validate(['id' => 'required|integer|exists:user_crypto_wallet,id'], [
                "id.required" => __("api.user.id_required"),
                "id.integer" => __("api.user.id_integer"),
                "id.exists" => __("api.user.id_exists"),
            ]);

        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $del = UserCryptoWallet::query()->where(['id' => $id, 'member_id' => $this->auth->id()])->delete();
        if ($del) {
            return $this->success(__('api.user.delete_success'));
        } else {
            return $this->error(__('api.user.delete_failed'));
        }
    }

    function delBank()
    {
        try {
            $id = request()->validate(['id' => 'required|integer|exists:user_bank,id'],
                [
                    "id.required" => __("api.user.id_required"),
                    "id.integer" => __("api.user.id_integer"),
                    "id.exists" => __("api.user.id_exists"),
                ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $del = \App\Models\UserBank::query()->where(['id' => $id, 'member_id' => $this->auth->id()])->delete();
        if ($del) {
            return $this->success(__('api.user.delete_success'));
        } else {
            return $this->error(__('api.user.delete_failed'));
        }
    }

    function changePassword(Request $request)
    {
        try {
            $post = $request->validate([
                'old_password' => 'required',
                'password' => 'required|confirmed',
            ], [
                "old_password.required" => __("api.user.old_password_error"),
                "password.required" => __("api.user.password_required"),
                "password.confirmed" => __("api.user.password_confirmed"),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $post['password'] = Hash::make($post['password']);

        //判断旧密码是否正确
        $user = $this->auth->user();
        if (!Hash::check($post['old_password'], $user->password)) {
            return $this->error(__('api.user.old_password_error'));
        }
        $user->password = $post['password'];
        $user->save();

        return $this->success(__('api.user.change_success'));
    }

    function logout()
    {
        //注销登录
        $this->auth->logout();
        return $this->success(__('api.user.logout_success'));
    }
}
