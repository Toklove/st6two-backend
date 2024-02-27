<?php

namespace App\Jobs;

use App\Models\ContractPin;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class WatchContactPin implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $list = ContractPin::query()->where('time', '>', time())->get();
        foreach ($list as $item) {
            ContactPin::dispatch($item['market'], $item['time'], $item['low'], $item['high'], $item['start_at']);
        }
    }
}
