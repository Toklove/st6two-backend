<?php

use App\Http\Controllers\api\Auth;
use App\Http\Controllers\api\Common;
use App\Http\Controllers\api\Index;
use App\Http\Controllers\api\Market;
use App\Http\Controllers\api\Option;
use App\Http\Controllers\api\User;
use App\Http\Controllers\api\Wallet;
use App\Http\Middleware\Lang;
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

Route::middleware(Lang::class)->group(function () {
    Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
        Route::post('login', [Auth::class, 'login']);
        Route::post('logout', [Auth::class, 'logout']);
        Route::post('refresh', [Auth::class, 'refresh']);
        Route::get('me', [Auth::class, 'me']);
        Route::post('send', [Auth::class, 'send']);
        Route::post('register', [Auth::class, 'register']);
        Route::post('restPass', [Auth::class, 'restPass']);
    });
    Route::group(['middleware' => 'api', 'prefix' => 'common'], function () {
        Route::post('upload', [Common::class, 'upload']);
    });

    Route::group(['middleware' => 'api', 'prefix' => 'index'], function () {
        Route::get('news', [Index::class, 'news']);
        Route::get('market', [Index::class, 'hot_pair']);
    });

    Route::group(['middleware' => 'api', 'prefix' => 'market'], function () {
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

    Route::group(['middleware' => 'api', 'prefix' => 'user'], function () {
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
        Route::post('/real', [User::class, 'real']);
        Route::get('/real', [User::class, 'real_info']);
    });

    Route::group(['prefix' => 'wallet'], function () {
        Route::get('record', [User::class, 'walletRecord']);
    });
});


Route::get('supportCoins', [Wallet::class, 'supportCoins']);

Route::any('/callback', [Wallet::class, 'callback']);
