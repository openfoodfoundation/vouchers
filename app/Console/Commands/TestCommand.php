<?php

namespace App\Console\Commands;

use App\Models\VoucherSet;
use App\Services\VoucherSetService;
use Illuminate\Console\Command;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:go';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test command. Do not run in production.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $voucherSet = VoucherSet::find('9d2129f4-befa-4702-950d-7d3342717462');

        $isValid = VoucherSetService::validateVoucherSetDenominations($voucherSet);

        dd($isValid);
    }
}
