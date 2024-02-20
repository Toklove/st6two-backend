<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;

    static function options()
    {
        $options = [];
        $list = Currency::all();
        foreach ($list as $item) {
            $options[$item->id] = $item->name;
        }
        return $options;
    }

}
