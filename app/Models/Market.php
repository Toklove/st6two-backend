<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Market extends Model
{
    use HasFactory;

    function category()
    {
        return $this->belongsTo(MarketCategory::class, 'category_id', 'id');
    }
}
