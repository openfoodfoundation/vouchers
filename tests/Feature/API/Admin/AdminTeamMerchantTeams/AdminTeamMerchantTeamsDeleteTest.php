<?php

namespace Tests\Feature\API\Admin\AdminTeamMerchantTeams;

use App\Models\TeamMerchantTeam;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use PHPUnit\Framework\Attributes\Test;
use Tests\Feature\API\BaseAPITestCase;

class AdminTeamMerchantTeamsDeleteTest extends BaseAPITestCase
{
    use DatabaseTransactions;
    use WithFaker;

    public string $endpoint = '/admin/team-merchant-teams';

    #[Test]
    public function onlyAdminCanAccess(): void
    {
        $this->user = $this->createUser();

        Sanctum::actingAs($this->user);

        $model = TeamMerchantTeam::factory()->create();

        $response = $this->deleteJson($this->apiRoot . $this->endpoint . '/' . $model->id);

        $response->assertStatus(401);
    }

    #[Test]
    public function itCanDeleteATeamMerchantTeam()
    {
        $this->user = $this->createAdminUser();

        Sanctum::actingAs(
            $this->user
        );

        $model = TeamMerchantTeam::factory()->create();

        $response = $this->deleteJson($this->apiRoot . $this->endpoint . '/' . $model->id);

        $response->assertStatus(200);
    }
}
