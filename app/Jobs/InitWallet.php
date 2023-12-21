<?php

namespace App\Jobs;

use App\Models\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class InitWallet implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private mixed $member_id;

    /**
     * Create a new job instance.
     */
    public function __construct($member_id)
    {
        $this->member_id = $member_id;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //初始化用户钱包信息
        $member = Member::query()->find($this->member_id);
        if ($member) {
            $member->initWallet();
        }
    }
}
