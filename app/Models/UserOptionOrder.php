<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserOptionOrder extends Model
{
    use HasFactory;

    protected $table = 'user_option_order';

    protected $fillable = [
        'member_id',
        'market_id',
        'time_id',
        'type',
        'buy_price',
        'order_num',
        'quantity',
        'hold_time',
        'rate',
        'lose_rate',
    ];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'sell_time' => 'datetime:Y-m-d H:i:s',
    ];

    function market()
    {
        return $this->belongsTo(Market::class, 'market_id', 'id');
    }

    function time()
    {
        return $this->belongsTo(OptionSetting::class, 'time_id', 'id');
    }

    function member()
    {
        return $this->belongsTo(Member::class, 'member_id', 'id');
    }
}
