<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDeposit extends Model
{
    use HasFactory;

    protected $table = 'user_deposit';
    protected $fillable = [
        'member_id',
        'amount',
        'txId',
        'order_no',
        'trade_id',
        'currency_id'
    ];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];

    function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }

    function member()
    {
        return $this->belongsTo(Member::class, 'member_id', 'id');
    }
}
