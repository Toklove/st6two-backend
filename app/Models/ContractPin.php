<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractPin extends Model
{
    use HasFactory;

    protected $table = 'contract_pin';

    protected $appends = ['market'];
    protected $fillable = ['market_id', 'time', 'low', 'high', 'start_at'];

    function market()
    {
        return $this->belongsTo(Market::class, 'market_id', 'id');
    }
}
