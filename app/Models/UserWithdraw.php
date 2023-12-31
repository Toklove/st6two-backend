<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserWithdraw extends Model
{
    use HasFactory;

    protected $table = 'user_withdraw';
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected $fillable = [
        'member_id',
        'amount',
        'order_no',
        'chain',
        'address',
        'account',
        'account_user',
        'bank_address',
        'bank_code',
        'bank_name',
    ];

    function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }
}
