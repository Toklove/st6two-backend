<?php

namespace App\Http\Controllers\api;

use App\Mail\EmailCheck;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class Auth extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => ['login', 'send', 'register']]);
    }

    public function me()
    {
        return $this->success('success', $this->auth->user());
    }

    public function logout()
    {
        $this->auth->logout();

        return $this->success(__('api.auth.successfully_logged_out'));
    }

    public function refresh()
    {
        return $this->respondWithToken($this->auth->refresh());
    }

    protected function respondWithToken($token)
    {
        return $this->success('success', [
            'access_token' => $token,
            'token_type' => 'bearer',
        ]);
    }

    function send()
    {
        //获取提交邮箱
        $email = request('email');

        $key = 'check_' . $email;
        $has = Cache::get($key);

        if ($has) {
            return $this->error(__('api.auth.do_not_send_repeatedly'));
        }

        $code = rand(100000, 999999);

        Cache::set($key, $code, 60 * 5);

        //发送邮箱验证码
//        SendEmail::dispatch(['email' => $email, 'code' => $code]);

//        Notification::route('mail', $email)
//            ->notify(new EmailCheckCodePaid($code));

        Mail::to([$email])->send(new EmailCheck($code));

        return $this->success();
    }

    function register(Request $request)
    {
        //验证邮件有效性
        $post = $request->validate([
            'email' => 'required|email|unique:members,email',
            'code' => 'required',
            'password' => 'required|min:8|confirmed',
        ], [
            "email.required" => __("auth.email_required"),
            "email.unique" => __("auth.email_unique"),
            "email.email" => __("auth.email_email"),
            "code.required" => __("auth.code_required"),
            "password.required" => __("auth.password_required"),
            "password.min" => __("auth.password_min"),
            "password.confirmed" => __("auth.password_confirmed"),
        ]);

        //验证邮箱验证码
        $key = 'check_' . $post['email'];
        $code = Cache::get($key);
        if (!$code) {
            return $this->error(__("auth.code_expired"));
        }
        if ($code != $post['code']) {
            return $this->error(__("auth.code_error"));
        }


        //执行注册逻辑
        $password = Hash::make($post['password']);
        $invite_code = $request->post('invite_code');

        if ($invite_code) {
            $parent = Member::query()->where('invite_code', $invite_code)->first();
            if (!$parent) {
                return $this->error(__("auth.invite_code_error"));
            }
        } else {
            $parent = null;
        }

        $member = new Member();
        $member->email = $post['email'];
        $member->password = $password;
        $member->invite_code = $this->getInviteCode();
        $member->parent_id = $parent ? $parent->id : 0;
        $member->nickname = $post['email'];
        $member->save();

        //初始化钱包信息 TODO 通过队列异步执行
        $member->initWallet();

        //清除验证码
        Cache::forget($key);

        //返回token
        $token = $this->auth->login($member);
        return $this->respondWithToken($token);
    }

    function getInviteCode()
    {
        $code = $this->getRandomString();
        $has = Member::query()->where('invite_code', $code)->first();
        if ($has) {
            return $this->getInviteCode();
        }
        return $code;
    }

    public function login()
    {
        $credentials = request(['email', 'password']);
        $remember = request('remember');

        if (!$token = $this->auth->attempt($credentials)) {
            return $this->error(__('api.auth.unauthorized'));
        }

        return $this->respondWithToken($token);
    }
}
