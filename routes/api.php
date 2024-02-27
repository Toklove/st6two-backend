<?php

use App\Constant\BillTag;
use App\Http\Controllers\api\Auth;
use App\Http\Controllers\api\Common;
use App\Http\Controllers\api\Index;
use App\Http\Controllers\api\Market;
use App\Http\Controllers\api\Option;
use App\Http\Controllers\api\User;
use App\Http\Controllers\api\Wallet;
use App\Http\Middleware\Lang;
use App\Models\Member;
use App\Models\UserOptionOrder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/captcha', [Common::class, 'captcha']);

Route::middleware(Lang::class)->group(function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', [Auth::class, 'login']);
        Route::post('send', [Auth::class, 'send']);
        Route::post('register', [Auth::class, 'register']);
        Route::post('restPass', [User::class, 'restPass']);
    });
    Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'auth'], function ($router) {
        Route::get('me', [Auth::class, 'me']);
        Route::get('logout', [Auth::class, 'logout']);
        Route::get('user', [User::class, 'info']);
    });
    Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'common'], function () {
        Route::post('upload', [Common::class, 'upload']);
    });

    Route::group(['prefix' => 'index'], function () {
        Route::get('news', [Index::class, 'news']);
        Route::get('market', [Index::class, 'hot_pair']);
    });

    Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'market'], function () {
        Route::get('kline', [Market::class, 'kline']);
        Route::get('info', [Market::class, 'market_info']);
        Route::post('like', [Market::class, 'like']);
        Route::get('category', [Market::class, 'category']);
        Route::get('list', [Market::class, 'list']);
        Route::post('contract_order', [Market::class, 'contract_order']);
        Route::get('contract_order_history', [Market::class, 'contract_order_history']);
        Route::post('hand_close_contract', [Market::class, 'hand_close_contract']);
        Route::post('hand_cancel_contract', [Market::class, 'hand_cancel_contract']);

        Route::post('option_order', [Option::class, 'option_order']);
        Route::get('option_order_history', [Option::class, 'option_order_history']);

        Route::prefix("/option")->group(function () {
            Route::get("/setting", [Option::class, 'setting']);
        });
    });

    Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'user'], function () {
        Route::post('update', [User::class, 'update']);
        Route::get('getCurrency', [User::class, 'getCurrency']);
        Route::post('addWallet', [User::class, 'addWallet']);
        Route::get('bankList', [User::class, 'bankList']);
        Route::get('cryptoList', [User::class, 'cryptoList']);
        Route::post('delBank', [User::class, 'delBank']);
        Route::post('delCrypto', [User::class, 'delCrypto']);
        Route::post('addBank', [User::class, 'addBank']);
        Route::post('changePassword', [User::class, 'changePassword']);
        Route::get('logout', [User::class, 'logout']);
        Route::post('real', [User::class, 'real']);
        Route::get('real', [User::class, 'real_info']);
        Route::post("/depositWallet", [User::class, 'depositWallet']);
    });

    Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'wallet'], function () {
        Route::get('update', [User::class, 'update']);
        Route::get('index', [User::class, 'walletBalance']);
        Route::get('record', [User::class, "walletRecord"]);
        Route::post('withdraw', [User::class, 'withdraw']);
    });
});


Route::get('supportCoins', [Wallet::class, 'supportCoins']);

Route::any('/callback', [Wallet::class, 'callback']);


Route::get('/test', function () {
    $order = UserOptionOrder::query()->with('market')->find(15);
    if (!$order) {
        return;
    }

    if ($order['status'] != 0) {
        return;
    }

    $order->status = 1;

    $market = $order->market;

    if ($order["set_price"]) {
        $price = $order["set_price"];
    } else {
        $price = get_now_price($market['symbol']);
    }

    $is_win = 0;
    $order->sell_price = $price;
    $order->sell_time = date('Y-m-d H:i:s');

    //判断盈利
    if ($order['type'] == 0 && $order['sell_price'] > $order['buy_price']) {
        $is_win = 1;
    } elseif ($order['type'] == 1 && $order['sell_price'] < $order['buy_price']) {
        $is_win = 1;
    }

    //结果已知 执行后续操作
    $num = $order['quantity'];
    $profit = 0;
    $amount = 0;
    if ($is_win == 0) {
        $profit = $num * $order['lose_rate'];
        $amount = $num - $profit;
    } elseif ($is_win == 1) {
        $profit = $num * $order['rate'];
        $amount = $num + $profit;
    }

    $order['win'] = $is_win;
    $order['status'] = 1;
    $order['profit'] = $profit;

//    return response()->json(['num' => $num, 'profit' => $profit, 'amount' => $amount, 'rate' => $order['lose_rate'], 'order' => $order, 'is_win' => $is_win]);

    DB::beginTransaction();
    try {
        //保存订单
        $order->save();
        //发放余额
        Member::money($amount, $order->member_id, BillTag::OptionsSettlementAmount);
        DB::commit();
        return response()->json($order);
    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json($e->getMessage());
    }
});
