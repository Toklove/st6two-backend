<?php

namespace App\Nova;

use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class UserOptionOrder extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\UserOptionOrder>
     */
    public static $model = \App\Models\UserOptionOrder::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    public static function label()
    {
        return __('短线合约');
    }

    /**
     * Get the fields displayed by the resource.
     *
     * @param NovaRequest $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable(),
            Email::make('Email', 'member.email')->onlyOnIndex()->sortable(),
            Text::make('代码', 'market.symbol')->onlyOnIndex()->sortable(),
            Select::make('类型', 'type')->options([
                '0' => '买入',
                '1' => '卖出',
            ])->displayUsingLabels(),
            Text::make('买入价', 'buy_price')->sortable(),
            DateTime::make('卖出时间', 'sell_time')->sortable(),
            Text::make('卖出价', 'sell_price')->sortable(),
            Text::make('建仓金额', 'quantity')->sortable(),
            Text::make('设置结算金额', 'set_price')->sortable(),
            Select::make('状态', 'status')->options([
                '0' => '待结算',
                '1' => '已结算',
            ])->displayUsingLabels(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param NovaRequest $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param NovaRequest $request
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param NovaRequest $request
     * @return array
     */
    public function lenses(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param NovaRequest $request
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return [];
    }
}
