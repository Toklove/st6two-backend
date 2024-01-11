<?php

namespace App\Nova\Actions\Member;

use App\Constant\BillTag;
use App\Models\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\ActionFields;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Http\Requests\NovaRequest;

class ChangeWithdraw extends Action
{
    use InteractsWithQueue, Queueable;

    public $name = '提现审核';

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
            $model->status = $fields->status;
            if ($fields->status == 2) {
                //如果审核失败，需要返还用户的余额
                $member = $model->member;
                Member::money($model->amount, $member->id, BillTag::WithdrawalAndRefund);
            }
            $model->save();
        }
    }

    /**
     * Get the fields available on the action.
     *
     * @param NovaRequest $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            Select::make('状态', 'status')->options([
                1 => '通过',
                2 => '驳回',
            ])->displayUsingLabels()->rules('required'),
        ];
    }
}
