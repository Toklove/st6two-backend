<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCryptoWallet extends Model
{
    use HasFactory;

    protected $table = 'user_crypto_wallet';

    function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }
}
