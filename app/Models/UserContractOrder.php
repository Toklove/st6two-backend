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
        "force_close_status",
        "closed_at"
    ];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'closed_at' => 'datetime:Y-m-d H:i:s',
    ];

    function market()
    {
        return $this->belongsTo(Market::class, 'market_id', 'id');
    }

    function member()
    {
        return $this->belongsTo(Member::class, 'member_id', 'id');
    }
}
