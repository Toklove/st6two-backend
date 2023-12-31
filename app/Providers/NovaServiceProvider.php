<?php

namespace App\Providers;

use App\Nova\Currency;
use App\Nova\Dashboards\Main;
use App\Nova\Market;
use App\Nova\MarketCategory;
use App\Nova\Member;
use App\Nova\News;
use App\Nova\OptionSetting;
use App\Nova\User;
use App\Nova\UserContractOrder;
use App\Nova\UserDeposit;
use App\Nova\UserOptionOrder;
use App\Nova\UserWithdraw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Menu\MenuItem;
use Laravel\Nova\Menu\MenuSection;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
        Nova::mainMenu(function (Request $request) {
            return [
                MenuSection::dashboard(Main::class)->icon('chart-bar'),

                MenuSection::make(__('用户管理'), [
                    MenuItem::resource(Member::class),
                ])->icon('user')->collapsable(),
                MenuSection::make(__('资金明细'), [
                    MenuItem::resource(UserDeposit::class),
                    MenuItem::resource(UserWithdraw::class),
                ])->icon('user')->collapsable(),
                MenuSection::make(__('期权管理'), [
                    MenuItem::resource(UserOptionOrder::class),
                    MenuItem::resource(UserContractOrder::class),
                    MenuItem::resource(OptionSetting::class),
                ])->icon('user')->collapsable(),
                MenuSection::make(__('管理员管理'), [
                    MenuItem::resource(User::class),
                ])->icon('user')->collapsable(),
                MenuSection::make(__('系统管理'), [
                    MenuItem::resource(News::class),
                    MenuItem::resource(Currency::class),
                    MenuItem::resource(MarketCategory::class),
                    MenuItem::resource(Market::class),
                ])->icon('user')->collapsable(),
            ];
        });
    }

    /**
     * Get the tools that should be listed in the Nova sidebar.
     *
     * @return array
     */
    public function tools()
    {
        return [];
    }

    function resources()
    {
        Nova::resourcesIn(app_path('Nova'));

        Nova::resources([
            \App\Nova\User::class,
            \App\Nova\Member::class,
        ]);
    }

    /**
     * Register the Nova routes.
     *
     * @return void
     */
    protected function routes()
    {
        Nova::routes()
            ->withAuthenticationRoutes()
            ->withPasswordResetRoutes()
            ->register();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Register the Nova gate.
     *
     * This gate determines who can access Nova in non-local environments.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewNova', function ($user) {
            return in_array($user->email, [
                //
            ]);
        });
    }

    /**
     * Get the dashboards that should be listed in the Nova sidebar.
     *
     * @return array
     */
    protected function dashboards()
    {
        return [
            new \App\Nova\Dashboards\Main,
        ];
    }
}
