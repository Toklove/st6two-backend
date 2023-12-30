<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserOptionOrder extends Model
{
    use HasFactory;

    protected $table = 'user_option_order';

    function market()
    {
        return $this->belongsTo(Market::class, 'market_id', 'id');
    }

    function time()
    {
        return $this->belongsTo(OptionSetting::class, 'time_id', 'id');
    }
}
