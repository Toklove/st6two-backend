<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserContractOrder extends Model
{
    use HasFactory;

    protected $table = 'user_contract_order';

    protected $fillable = [
        "member_id",
        "market_id",
        "stop_surplus",
        "stop_loss",
        "order_num",
        "lever",
        "quantity",
        "type",
        "paid_price",
        "buy_fee",
        "buy_fee_rate",
        "status",
        "assure",
        "force_close_status"
    ];

}
