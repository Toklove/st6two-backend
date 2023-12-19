<?php

namespace App\Http\Controllers\api;

class UserBank extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => []]);
    }

    function index()
    {
        $user = $this->auth->user();
        $banks = $user->banks;
        return $this->success('success', $banks);
    }
}
