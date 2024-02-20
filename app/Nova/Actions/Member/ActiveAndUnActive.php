<?php

namespace App\Nova\Actions\Member;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\ActionFields;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Http\Requests\NovaRequest;

class ActiveAndUnActive extends Action
{
    use InteractsWithQueue, Queueable;

    public $name = '激活/禁用';

    /**
     * Perform the action on the given models.
     *
     * @param \Laravel\Nova\Fields\ActionFields $fields
     * @param \Illuminate\Support\Collection $models
     * @return mixed
     */
    public function handle(ActionFields $fields, Collection $models)
    {
        foreach ($models as $model) {
            $active = 0;
            if ($fields->active == 1) {
                $active = 1;
            }
            if ($fields->type == 0) {
                $model->active = $active;
            } elseif ($fields->type == 1) {
                $model->is_exchange = $active;
            } elseif ($fields->type == 2) {
                $model->is_withdraw = $active;
            }
            //TODO 实现禁用后强制退出中间件
            $model->save();
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
            Select::make('激活/禁用', 'active')->options([
                '1' => '激活',
                '0' => '禁用'
            ])->displayUsingLabels(),
            Select::make('操作类型', 'type')->options([
                '0' => '登录',
                '1' => '交易',
                '2' => '提现'
            ])->displayUsingLabels(),
        ];
    }
}
