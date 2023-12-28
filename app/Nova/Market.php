<?php

namespace App\Nova;

use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Status;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Timezone;
use Laravel\Nova\Http\Requests\NovaRequest;
use Michielfb\Time\Time;

class Market extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Market>
     */
    public static $model = \App\Models\Market::class;

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
            Text::make('名称', "name"),
            Text::make('交易对标识', 'symbol'),
            Text::make('历史记录采集标识', 'symbol_history'),
            Image::make("图标", "logo")->prunable(),
            Timezone::make('时区', 'time_zone')->rules('required', 'string', 'max:255'),
            Time::make('早间开始时间', 'morning_start_time')->rules('required', 'string', 'max:255'),
            Time::make('早间结束时间', 'morning_end_time')->rules('required', 'string', 'max:255'),
            Time::make('下午开始时间', 'afternoon_start_time')->rules('required', 'string', 'max:255'),
            Time::make('下午结束时间', 'afternoon_end_time')->rules('required', 'string', 'max:255'),
            Text::make('完整名称', 'full_name'),
            \Laravel\Nova\Fields\Currency::make('买单手续费', 'buy_fee'),
            \Laravel\Nova\Fields\Currency::make('买单手续费', 'sell_fee'),
            \Laravel\Nova\Fields\Currency::make('最小手数', 'hand_min'),
            \Laravel\Nova\Fields\Currency::make('最大手数', 'hand_max'),
            Status::make('状态', 'open_status')->failedWhen(['0' => '关闭'])->loadingWhen(['1' => '开启',]),
            Status::make('是否为热门', 'hot')->failedWhen(['0'])->loadingWhen(['1']),
            BelongsTo::make('分类', 'category', MarketCategory::class)->searchable()
                ->nullable(),
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
