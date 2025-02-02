<?php

namespace Tests\Feature\API\Admin\AdminVoucherSets;

use App\Models\VoucherSet;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use PHPUnit\Framework\Attributes\Test;
use Tests\Feature\API\BaseAPITestCase;

class AdminVoucherSetsDeleteTest extends BaseAPITestCase
{
    private string $endpoint = '/admin/voucher-sets';

    use WithFaker;

    #[Test]
    public function itFailsIfNotAuthenticated()
    {
        $this->user = $this->createUserWithTeam();

        $model = VoucherSet::factory()
            ->create();

        $response = $this->delete($this->apiRoot . $this->endpoint . '/' . $model->id);
        $response->assertStatus(302);
    }

    #[Test]
    public function onlyAdminCanAccess()
    {
        $this->user = $this->createUserWithTeam();

        Sanctum::actingAs(
            $this->user
        );

        $model = VoucherSet::factory()
            ->create(
                [
                    'created_by_team_id' => $this->user->current_team_id,
                    'created_by_user_id' => $this->user->id,
                ]
            );

        $response = $this->delete($this->apiRoot . $this->endpoint . '/' . $model->id);
        $response->assertStatus(302);
    }

    #[Test]
    public function adminCanDeleteData()
    {
        $this->user = $this->createAdminUser();

        Sanctum::actingAs(
            $this->user
        );

        $model = VoucherSet::factory()
            ->create();

        $response = $this->delete($this->apiRoot . $this->endpoint . '/' . $model->id);
        $response->assertOk();
        $this->assertSoftDeleted($model);
    }
}
