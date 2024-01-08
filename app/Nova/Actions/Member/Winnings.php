<?php

namespace App\Nova\Actions\Member;

use App\Constant\BillTag;
use App\Models\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\ActionFields;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Http\Requests\NovaRequest;

class Winnings extends Action
{
    use InteractsWithQueue, Queueable;

    public $name = "彩金赠送";

    /**
     * Perform the action on the given models.
     *
     * @param \Laravel\Nova\Fields\ActionFields $fields
     * @param \Illuminate\Support\Collection $models
     * @return mixed
     */
    public function handle(ActionFields $fields, Collection $models)
    {
        //
        foreach ($models as $model) {
            Member::money($fields->number, $model->id, BillTag::WinningsDeposit);
        }
        return Action::message('赠送成功');
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
            Number::make('赠送金额', 'number')->rules('required', 'numeric', 'min:1'),
        ];
    }
}
