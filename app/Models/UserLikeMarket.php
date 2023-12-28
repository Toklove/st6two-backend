<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLikeMarket extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'market_id'];
}
