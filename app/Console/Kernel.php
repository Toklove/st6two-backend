<?php

namespace App\Console;

use App\Jobs\WatchContactPin;
use App\Jobs\WatchContractOrder;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        //每秒调度一次 处理合约订单
        $schedule->job(new WatchContractOrder())->everySecond(); //合约订单监控
        $schedule->job(new WatchContactPin())->everySecond(); //插针监控
//        $schedule->command('horizon')->everyFiveMinutes()->runInBackground(); //horizon监控
//        $schedule->command('queue:work --tries=3 --stop-when-empty')->everyMinute()->runInBackground(); //默认队列
//        $schedule->command('queue:work --tries=3 --stop-when-empty --queue=contract_order')->everyMinute()->runInBackground(); //永续合约队列
//        $schedule->command('queue:work --tries=3 --stop-when-empty --queue=option_order')->everyMinute()->runInBackground(); //秒合约队列

    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
