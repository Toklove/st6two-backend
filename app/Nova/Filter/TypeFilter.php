<?php

namespace App\Nova\Filter;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;

class TypeFilter extends Filter
{
    public $name = 'Status';

    public function apply(Request $request, $query, $value)
    {
        return $query->where('is_agent', $value);
    }

    public function options(Request $request)
    {
        return [
            '0' => '非代理',
            '1' => '是代理',
        ];
    }
}
