<?php

namespace App\Http\Controllers\api;

use App\Constant\BillTag;
use App\Models\Currency;
use App\Models\Member;
use App\Models\UserCryptoAddress;
use App\Models\UserCryptoWallet;
use App\Models\UserDeposit;
use App\Models\UserWithdraw;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class User extends BaseApi
{
    //
    public function __construct()
    {
        parent::__construct();
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
                "bank_name.required" => __("user.bank_name_required"),
                "account.required" => __("user.account_required"),
                "account_user.required" => __("user.account_user_required"),
                "bank_address.required" => __("user.bank_address_required"),
                "bank_code.required" => __("user.bank_code_required"),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $userBank = new \App\Models\UserBank();
        $userBank->member_id = $request->user()->id;
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
                    "currency_id.required" => __("user.currency_id_required"),
                    "currency_id.integer" => __("user.currency_id_integer"),
                    "currency_id.exists" => __("user.currency_id_exists"),
                    "address.required" => __("user.address_required"),
                ]
            );
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $userCryptoWallet = new UserCryptoWallet();
        $userCryptoWallet->member_id = $request->user()->id;
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
                "nickname.required" => __("user.nickname_required"),
                "avatar.required" => __("user.avatar_required"),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }

        //更新用户信息
        $user = $request->user();
        $user->nickname = $post['nickname'];
        $user->avatar = $post['avatar'];
        $user->save();

        return $this->success('success', $user);
    }

    function getCurrency(Request $request)
    {
        //获取币种
        $currencies = Currency::all();
        foreach ($currencies as $currency) {
            $currency['address'] = UserCryptoAddress::query()->where(['member_id' => $request->user()->id, 'currency_id' => $currency->id])->value('address');
        }
        return $this->success('success', $currencies);
    }

    function bankList(Request $request)
    {
        $list = \App\Models\UserBank::query()->where('member_id', $request->user()->id)->get();
        return $this->success('success', $list);
    }

    function cryptoList(Request $request)
    {
        $list = UserCryptoWallet::query()->with('currency')->where('member_id', $request->user()->id)->get();
        return $this->success('success', $list);
    }

    function delCrypto(Request $request)
    {
        try {
            $id = request()->validate(['id' => 'required|integer|exists:user_crypto_wallet,id'], [
                "id.required" => __("user.id_required"),
                "id.integer" => __("user.id_integer"),
                "id.exists" => __("user.id_exists"),
            ]);

        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $del = UserCryptoWallet::query()->where(['id' => $id, 'member_id' => $request->user()->id])->delete();
        if ($del) {
            return $this->success(__('user.delete_success'));
        } else {
            return $this->error(__('user.delete_failed'));
        }
    }

    function delBank(Request $request)
    {
        try {
            $id = request()->validate(['id' => 'required|integer|exists:user_bank,id'],
                [
                    "id.required" => __("user.id_required"),
                    "id.integer" => __("user.id_integer"),
                    "id.exists" => __("user.id_exists"),
                ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $del = \App\Models\UserBank::query()->where(['id' => $id, 'member_id' => $request->user()->id])->delete();
        if ($del) {
            return $this->success(__('user.delete_success'));
        } else {
            return $this->error(__('user.delete_failed'));
        }
    }

    function real(Request $request)
    {
        try {
            $data = $request->validate(['real_name' => 'required', 'id_number' => 'required', 'front' => 'required', 'back' => 'required'], [
                "real_name.required" => __("user.real_name_required"),
                "id_number.required" => __("user.id_number_required"),
                "front.required" => __("user.front_required"),
                "back.required" => __("user.back_required"),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }

        $user = $request->user();
        $user->real_name = $data['real_name'];
        $user->id_card = $data['id_number'];
        $user->id_card_front = $data['front'];
        $user->id_card_back = $data['back'];
        $user->is_certified = 0;
        $user->save();

        return $this->success(__('user.real_success'));
    }

    function real_info(Request $request)
    {
        $data = [
            'real_name' => $request->user()->real_name,
            'id_number' => $request->user()->id_card,
            'front' => $request->user()->id_card_front,
            'back' => $request->user()->id_card_back,
            'is_certified' => $request->user()->is_certified,
        ];
        return $this->success('success', $data);
    }

    function changePassword(Request $request)
    {
        try {
            $post = $request->validate([
                'old_password' => 'required',
                'password' => 'required|confirmed',
            ], [
                "old_password.required" => __("user.old_password_error"),
                "password.required" => __("user.password_required"),
                "password.confirmed" => __("user.password_confirmed"),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        $post['password'] = Hash::make($post['password']);

        //判断旧密码是否正确
        $user = $request->user();
        if (!Hash::check($post['old_password'], $user->password)) {
            return $this->error(__('user.old_password_error'));
        }
        $user->password = $post['password'];
        $user->save();

        return $this->success(__('user.change_success'));
    }

    function logout(Request $request)
    {
        //注销登录
        $request->user()->currentAccessToken()->delete();
        return $this->success(__('user.logout_success'));
    }

    function walletRecord(Request $request)
    {
        $type = $request->input('type', 0);
        if ($type == 0) {
            $list = UserDeposit::query()->with('currency')->where('member_id', $request->user()->id)->orderByDesc('id')->paginate(10);
        } else {
            $list = UserWithdraw::query()->with('currency')->where('member_id', $request->user()->id)->orderByDesc('id')->paginate(10);
        }
        return $this->success('success', $list);
    }

    function withdraw(Request $request)
    {

        try {
            $post = $request->validate([
                'id' => 'required|integer',
                'amount' => 'required|numeric|min:1',
                'type' => 'required|integer',
            ], [
                "id.required" => __("user.id_required"),
                "id.integer" => __("user.id_integer"),
                "amount.required" => __("user.amount_required"),
                "amount.numeric" => __("user.amount_numeric"),
                "amount.min" => __("user.amount_min"),
                "type.required" => __("user.type_required"),
                "type.integer" => __("user.type_integer"),
            ]);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }

        $block = $request->user()->is_withdraw;
        if ($block == 0) {
            return $this->error(__('market.account_withdraw_blocked'));
        }

        $balance = $request->user()->balance;
        if ($balance < $post['amount']) {
            return $this->error(__('user.balance_not_enough'));
        }

        $member_id = $request->user()->id;

        $order_no = date('YmdHis') . rand(100000, 999999) . $member_id;


        $data = [
            'member_id' => $member_id,
            'amount' => $post['amount'],
            'order_no' => $order_no,
        ];

        if ($post['type'] == 0) {
            $wallet = UserCryptoWallet::query()->with('currency')->where(['member_id' => $member_id, 'id' => $post['id']])->first();
            if (!$wallet) {
                return $this->error(__('user.wallet_not_exists'));
            }
            $data['chain'] = $wallet->currency->name;
            $data['address'] = $wallet->address;
        } else {
            $bank = \App\Models\UserBank::query()->where(['member_id' => $member_id, 'id' => $post['id']])->first();
            if (!$bank) {
                return $this->error(__('user.bank_not_exists'));
            }
            $data['account'] = $bank->account;
            $data['account_user'] = $bank->account_user;
            $data['bank_address'] = $bank->bank_address;
            $data['bank_code'] = $bank->bank_code;
            $data['bank_name'] = $bank->bank_name;
        }

        //扣除提现金额
        try {
            UserWithdraw::create($data);
            Member::money(-$data['amount'], $member_id, BillTag::WithdrawMoney);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }

        return $this->success(__('user.withdraw_success'));
    }

    function info(Request $request)
    {
        return $this->success('success', $request->user());
    }
}
