<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

class BaseApi extends Controller
{


    public function __construct()
    {
    }

    function success($message = 'success', $data = [], $code = 1)
    {
        return response()->json([
            'code' => $code,
            'message' => $message,
            'data' => $data
        ]);
    }

    function error($message = 'error', $data = [], $code = 0)
    {
        return response()->json([
            'code' => $code,
            'message' => $message,
            'data' => $data
        ]);

    }

    /**
     * 生成随机字母加数字 字符串
     * @param int $len 要生成字符串长度
     * @param null $chars 要生成字符串包含的字符
     * @return string   生成的字符串
     */
    public function getRandomString($len = 6, $chars = null)
    {
        if (is_null($chars)) {
            $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        }
        mt_srand(10000000 * (double)microtime());
        for ($i = 0, $str = '', $lc = strlen($chars) - 1; $i < $len; $i++) {
            $str .= $chars[mt_rand(0, $lc)];
        }
        return $str;
    }
}
