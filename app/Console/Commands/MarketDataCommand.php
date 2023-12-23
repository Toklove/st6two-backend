<?php

namespace App\Console\Commands;

use App\extends\MarketData\MarketData;
use Illuminate\Console\Command;

class MarketDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'marketdata:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run the market data server';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Running market data server...');
        $marketData = MarketData::getInstance();
    }
}
