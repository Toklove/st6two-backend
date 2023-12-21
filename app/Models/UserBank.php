<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBank extends Model
{
    use HasFactory;

    protected $table = 'user_bank';
    protected $fillable = ['member_id', 'bank_name', 'account', 'account_user', 'bank_address', 'bank_code'];
}
