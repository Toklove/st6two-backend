<?php

namespace App\Nova\Actions\Market;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\ActionFields;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Http\Requests\NovaRequest;

class ContactPin extends Action
{
    use InteractsWithQueue, Queueable;

    public $name = '插针';

    /**
     * Perform the action on the given models.
     *
     * @param \Laravel\Nova\Fields\ActionFields $fields
     * @param \Illuminate\Support\Collection $models
     * @return mixed
     */
    public function handle(ActionFields $fields, Collection $models)
    {
        //如果$fields->time小于当前时间，不允许插针
        if ($fields->time < now()) {
            return Action::danger('操作失败，时间不能小于当前时间');
        }
        //
        foreach ($models as $model) {
            $model->pin($fields->time, $fields->low, $fields->high);
        }
        return Action::message('操作成功');
    }

    /**
     * Get the fields available on the action.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            DateTime::make('结束时间', 'time')->rules('required', 'date'),
            Number::make('最低价', 'low')->rules('required'),
            Number::make('最高价', 'high')->rules('required'),
        ];
    }
}
