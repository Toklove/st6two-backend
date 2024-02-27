<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;

class UserBank extends BaseApi
{
    public function __construct()
    {
        parent::__construct();
    }

    function index(Request $request)
    {
        $user = $request->user();
        $banks = $user->banks;
        return $this->success('success', $banks);
    }
}
