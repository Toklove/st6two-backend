<?php

namespace App\Nova;

use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class UserContractOrder extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\UserContractOrder>
     */
    public static $model = \App\Models\UserContractOrder::class;

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
        return __('长线合约');
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
            Text::make('买入价', 'paid_price')->sortable(),
            Text::make('建仓金额', 'quantity')->sortable(),
            Text::make('杠杆', 'lever')->sortable(),
            Text::make('止盈', 'stop_surplus')->sortable(),
            Text::make('止损', 'stop_loss')->sortable(),
            Select::make('状态', 'status')->options([
                '0' => '待开仓',
                '1' => '持仓中',
                '2' => '已平仓',
                '3' => '已强平',
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
