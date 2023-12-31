<?php

namespace App\Nova;

use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class UserWithdraw extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\UserWithdraw>
     */
    public static $model = \App\Models\UserWithdraw::class;

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
        return __('出金记录');
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
            Text::make("提笔链", 'chain')->sortable(),
            Text::make('提笔地址', 'address')->sortable(),
            Text::make('卡号', 'account')->sortable(),
            Text::make('姓名', 'account_user')->sortable(),
            Text::make('地址', 'bank_address')->sortable(),
            Text::make('代码', 'bank_code')->sortable(),
            Text::make('名称', 'bank_name')->sortable(),
            Select::make('状态', 'status')->options([
                '0' => '未处理',
                '1' => '已处理',
                '2' => '已拒绝',
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
