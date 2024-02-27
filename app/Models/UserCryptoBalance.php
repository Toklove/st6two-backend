<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCryptoBalance extends Model
{
    use HasFactory;

    protected $table = 'user_crypto_balance';
    protected $fillable = ['member_id', 'currency_id', 'balance'];

    function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }
}
