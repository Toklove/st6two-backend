<?php

namespace App\Nova\Actions\Member;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\ActionFields;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Http\Requests\NovaRequest;

class ResetPassword extends Action
{

    public $name = '重置密码';

    use InteractsWithQueue, Queueable;

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
            if ($fields->password) {
                $model->password = $fields->password;
            }

            if ($fields->withdraw_password) {
                $model->withdraw_password = $fields->withdraw_password;
            }

            $model->save();
        }
        return Action::message('重置密码成功');
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
            Password::make('密码', 'password'),
            Password::make('提款密码', 'withdraw_password'),
        ];
    }
}
