<?php

namespace App\Http\Controllers\api;

use App\Constant\BillTag;
use App\extends\Udun\uDun;
use App\Models\Currency;
use App\Models\Member;
use App\Models\UserCryptoAddress;
use App\Models\UserDeposit;

class Wallet extends BaseApi
{
    //
    public function __construct()
    {
        parent::__construct();
        //初始化uDun实例
        $this->udunDispatch = uDun::getInstance();
    }

    //查询支持的交易对
    public function supportCoins()
    {
        $result = $this->udunDispatch->supportCoins();
        return response()->json($result);
    }

    //交易回调
    public function callback()
    {
        $post = request()->post();
        $nonce = $post['nonce'];
        $timestamp = $post['timestamp'];
        $sign = $post['sign'];
        //接收回调参数 用于日志记录
        //$content = file_get_contents('php://input');
        //$this->printLog("回调接收内容:".$content);

        $body = $post['body'];

        //验证签名
        $signCheck = $this->udunDispatch->signature(json_encode($body), $timestamp, $nonce);
//        if ($sign != $signCheck) {
//            return response()->json(['code' => -1, 'msg' => '签名错误']);
//        }
//        $body = json_decode($body);
        //$this->printLog("回调接收内容(tradeType):".$body->tradeType);
        //$body->tradeType 1充币回调 2提币回调
        if ($body['tradeType'] == 1) {

            //$body->status 0待审核 1审核成功 2审核驳回 3交易成功 4交易失败
            if ($body['status'] == 3) {
                //业务处理

                //获取充值币种的汇率
                $currency = Currency::query()->where('coin_type', $body['coinType'])->first();
                $rate = $currency->rate;

                //根据汇率计算充值金额
                $amount = $body['amount'] * $rate;

                //根据地址获取充值的用户
                $member_id = UserCryptoAddress::query()->where(['address' => $body['address'],'currency_id' => $currency->id])->value('member_id');

                //跟用户充值余额
                try {
                    Member::money($amount, $member_id, BillTag::Deposit);
                    UserDeposit::query()->create(['member_id' => $member_id, 'amount' => $amount, 'txId' => $body['txId']]);
                } catch (\Exception $e) {
                    return response()->json(['code' => -1, 'msg' => '充值失败','err' => $e->getMessage()]);
                }
            }
            //无论业务方处理成功与否（success,failed），回调都认为成功
            return response("success");

        } elseif ($body['tradeType'] == 2) {

            //$body->status 0待审核 1审核成功 2审核驳回 3交易成功 4交易失败
            if ($body['status'] == 0) {
                //业务处理
            } else if ($body['status'] == 1) {
                //业务处理
            } else if ($body['status'] == 2) {
                //业务处理
            } else if ($body['status'] == 3) {
                //业务处理
            } else if ($body['status'] == 4) {
                //业务处理
            }
            //无论业务方处理成功与否（success,failed），回调都认为成功
            return "success";
        }
    }

}
