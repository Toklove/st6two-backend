<?php

namespace App\Models;

use App\Jobs\ContactPin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Market extends Model
{
    use HasFactory;

    function category()
    {
        return $this->belongsTo(MarketCategory::class, 'category_id', 'id');
    }

    function pin($time, $low, $high)
    {
        $startAt = DB::connection('mongodb')->collection($this->symbol)->orderBy('timestamp', 'desc')->limit(1)->first()['timestamp'];
        //队列处理 传入当前市场，时间，最低价，最高价
        ContactPin::dispatch($this, $time, $low, $high, $startAt);
    }
}
