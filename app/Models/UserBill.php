<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBill extends Model
{
    use HasFactory;
    protected $table = 'user_bill';
    protected $fillable = [
        'member_id',
        'amount',
        'type',
        'tag',
        'after_balance',
        'before_balance',
    ];
}
