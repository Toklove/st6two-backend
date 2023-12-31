<?php

namespace App\Nova;

use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class UserDeposit extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\UserDeposit>
     */
    public static $model = \App\Models\UserDeposit::class;

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
        return __('入金记录');
    }

    /**
     * Get the fields displayed by the resource.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable(),
            Email::make('Email', 'member.email')->onlyOnIndex()->sortable(),
            Text::make('TxId', 'txId')->sortable(),
            Text::make('金额', 'amount')->sortable(),
            Text::make("订单号", 'order_no')->sortable(),
            Text::make("tradeId", 'trade_id')->sortable(),
            Text::make("币种", 'currency.name')->sortable(),
            Select::make('状态', 'status')->options([
                '0' => '未处理',
                '1' => '已处理',
            ])->displayUsingLabels(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function lenses(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return [];
    }
}
