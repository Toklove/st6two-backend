<?php

namespace App\Nova;

use App\Nova\Actions\Member\Deduction;
use App\Nova\Actions\Member\Recharge;
use Illuminate\Validation\Rules;
use Laravel\Nova\Fields\Avatar;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Member extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Member>
     */
    public static $model = \App\Models\Member::class;
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
        return __('会员列表');
    }

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    function title()
    {
        return $this->email;
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
            Email::make('email')->creationRules('unique:members,email')
                ->updateRules('unique:members,email,{{resourceId}}')->sortable(),
            Text::make('邀请码', 'invite_code')->rules(['required', 'string'])->creationRules('unique:members,invite_code,{{resourceId}}')
                ->updateRules('unique:members,invite_code,{{resourceId}}')->sortable(),
            Avatar::make('头像', 'avatar')->disk('public')->prunable(),
            Text::make('真实姓名', 'real_name')->onlyOnForms()->rules(['string'])->sortable(),
            Text::make('身份证号', 'id_card')->onlyOnForms()->rules(['string'])->sortable(),
            Image::make('身份证正面', 'id_card_front')->onlyOnForms()->disk('public')->prunable(),
            Image::make('身份证反面', 'id_card_back')->onlyOnForms()->disk('public')->prunable(),
            Boolean::make('激活', 'active')->sortable()
                ->trueValue('1')
                ->falseValue('0'),
            \Laravel\Nova\Fields\Currency::make('余额', 'balance')->onlyOnIndex()->sortable(),
            Password::make('密码', 'password')
                ->onlyOnForms()
                ->creationRules('required', Rules\Password::defaults())
                ->updateRules('nullable', Rules\Password::defaults()),
            BelongsTo::make('上级', 'parent', self::class)->searchable()
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
        return [
            (new Recharge())->showInline(),
            (new Deduction())->showInline(),
            (new Actions\Member\ResetPassword())->showInline(),
            (new Actions\Member\ActiveAndUnActive())->showInline()->showOnIndex(),
        ];
    }
}
