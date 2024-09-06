<?php

namespace Tests\Feature\API\App\VoucherRedemption;

use App\Enums\PersonalAccessTokenAbility;
use App\Models\Team;
use App\Models\TeamUser;
use App\Models\Voucher;
use App\Models\VoucherRedemption;
use App\Models\VoucherSet;
use App\Models\VoucherSetMerchantTeam;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use PHPUnit\Framework\Attributes\Test;
use Tests\Feature\API\BaseAPITestCase;

class VoucherRedemptionPostTest extends BaseAPITestCase
{
    use RefreshDatabase;

    protected string $endPoint = '/voucher-redemptions';

    #[Test]
    public function itFailsIfNotAuthenticated()
    {
        $this->user = $this->createUser();

        $response = $this->postJson($this->apiRoot . $this->endPoint);
        $response->assertStatus(401);
    }

    #[Test]
    public function itFailsIfUserDoesNotHaveTheCorrectToken()
    {
        $this->user = $this->createUserWithTeam();

        Sanctum::actingAs($this->user, abilities: [
            // Missing token
        ]);

        $voucherSet = VoucherSet::factory()->createQuietly([
            'created_by_user_id' => $this->user->id,
        ]);

        $voucher = Voucher::factory()->createQuietly([
            'voucher_set_id' => $voucherSet->id,
        ]);

        $payload = [
            'voucher_id'     => $voucher->id,
            'voucher_set_id' => $voucherSet->id,
            'amount'         => 1,
        ];

        $response = $this->postJson($this->apiRoot . $this->endPoint, $payload);
        $response->assertStatus(401);
    }

    #[Test]
    public function itCanRedeemVoucherWhenUserIsMemberOfMerchantTeam()
    {
        $this->user = $this->createUserWithTeam();

        Sanctum::actingAs($this->user, abilities: [
            PersonalAccessTokenAbility::VOUCHER_REDEMPTIONS_CREATE->value,
        ]);

        $voucherSet = VoucherSet::factory()->createQuietly([
            'created_by_user_id' => $this->user->id,
        ]);

        $voucher = Voucher::factory()->createQuietly([
            'voucher_set_id' => $voucherSet->id,
        ]);

        $voucherSetMerchantTeam = VoucherSetMerchantTeam::factory()->createQuietly([
            'voucher_set_id'   => $voucherSet->id,
            'merchant_team_id' => $this->user->current_team_id,
        ]);

        $payload = [
            'voucher_id'     => $voucher->id,
            'voucher_set_id' => $voucherSet->id,
            'amount'         => 1,
        ];

        $response = $this->postJson($this->apiRoot . $this->endPoint, $payload);
        $response->assertOk();
    }

    #[Test]
    public function itFailsIfUserIsNotMemberOfMerchantTeam()
    {
        $this->user = $this->createUserWithTeam();

        Sanctum::actingAs($this->user, abilities: [
            PersonalAccessTokenAbility::VOUCHER_REDEMPTIONS_CREATE->value,
        ]);

        $voucherSet = VoucherSet::factory()->createQuietly([
            'created_by_user_id' => $this->user->id,
        ]);

        $voucher = Voucher::factory()->createQuietly([
            'voucher_set_id' => $voucherSet->id,
        ]);

        $payload = [
            'voucher_id'     => $voucher->id,
            'voucher_set_id' => $voucherSet->id,
            'amount'         => 1,
        ];

        $response = $this->postJson($this->apiRoot . $this->endPoint, $payload);
        $response->assertNotFound();

        $responseObject = json_decode($response->getContent(), false);
        $this->assertSame('Team: Not found', $responseObject->meta->message);
    }

    #[Test]
    public function itFailsIfUsersCurrentTeamIsNotTheMerchantTeam()
    {
        $this->user = $this->createUserWithTeam();

        Sanctum::actingAs($this->user, abilities: [
            PersonalAccessTokenAbility::VOUCHER_REDEMPTIONS_CREATE->value,
        ]);

        $voucherSet = VoucherSet::factory()->createQuietly([
            'created_by_user_id' => $this->user->id,
        ]);

        $voucher = Voucher::factory()->createQuietly([
            'voucher_set_id' => $voucherSet->id,
        ]);

        /**
         * User is also a member of another team
         */
        $otherTeam = Team::factory()->createQuietly();

        $teamUserForOtherTeam = TeamUser::factory()->createQuietly([
            'team_id' => $otherTeam->id,
            'user_id' => $this->user->id,
        ]);

        /**
         * The other team (not the user's current team) is the voucher set merchant
         */
        $voucherSetMerchantTeam = VoucherSetMerchantTeam::factory()->createQuietly([
            'voucher_set_id'   => $voucherSet->id,
            'merchant_team_id' => $otherTeam->id,
        ]);

        $payload = [
            'voucher_id'     => $voucher->id,
            'voucher_set_id' => $voucherSet->id,
            'amount'         => 1,
        ];

        $response = $this->postJson($this->apiRoot . $this->endPoint, $payload);
        $response->assertStatus(400);

        $responseObject = json_decode($response->getContent(), false);
        $this->assertSame('Your team is not a merchant for this voucher; you may not redeem this voucher.', $responseObject->meta->message);
    }

    #[Test]
    public function itFailsIfLastRedemptionOccurredLessThanAMinuteAgo()
    {
        $this->user = $this->createUserWithTeam();

        Sanctum::actingAs($this->user, abilities: [
            PersonalAccessTokenAbility::VOUCHER_REDEMPTIONS_CREATE->value,
        ]);

        $voucherSet = VoucherSet::factory()->createQuietly([
            'created_by_user_id' => $this->user->id,
        ]);

        $voucher = Voucher::factory()->createQuietly([
            'voucher_set_id'     => $voucherSet->id,
            'last_redemption_at' => now(),
        ]);

        $voucherSetMerchantTeam = VoucherSetMerchantTeam::factory()->createQuietly([
            'voucher_set_id'   => $voucherSet->id,
            'merchant_team_id' => $this->user->current_team_id,
        ]);

        $payload = [
            'voucher_id'     => $voucher->id,
            'voucher_set_id' => $voucherSet->id,
            'amount'         => 1,
        ];

        $response = $this->postJson($this->apiRoot . $this->endPoint, $payload);
        $response->assertStatus(429);

        $responseObject = json_decode($response->getContent(), false);
        $this->assertSame('Too many redemption attempts, please wait 60 seconds.', $responseObject->meta->message);
    }

    #[Test]
    public function itFailsIfVoucherHasNoValueRemaining()
    {
        $this->user = $this->createUserWithTeam();

        Sanctum::actingAs($this->user, abilities: [
            PersonalAccessTokenAbility::VOUCHER_REDEMPTIONS_CREATE->value,
        ]);

        $voucherSet = VoucherSet::factory()->createQuietly([
            'created_by_user_id' => $this->user->id,
        ]);

        $totalVoucherValue = rand(10, 100);

        $voucher = Voucher::factory()->createQuietly([
            'voucher_set_id'          => $voucherSet->id,
            'voucher_value_original'  => $totalVoucherValue,
            'voucher_value_remaining' => $totalVoucherValue,
        ]);

        $voucherSetMerchantTeam = VoucherSetMerchantTeam::factory()->createQuietly([
            'voucher_set_id'   => $voucherSet->id,
            'merchant_team_id' => $this->user->current_team_id,
        ]);

        $redemption = VoucherRedemption::factory()->createQuietly([
            'voucher_id'      => $voucher->id,
            'voucher_set_id'  => $voucherSet->id,
            'redeemed_amount' => $totalVoucherValue,
        ]);

        $payload = [
            'voucher_id'     => $voucher->id,
            'voucher_set_id' => $voucherSet->id,
            'amount'         => 1,
        ];

        $response = $this->postJson($this->apiRoot . $this->endPoint, $payload);
        $response->assertStatus(400);

        $responseObject = json_decode($response->getContent(), false);
        $this->assertSame('This voucher has already been fully redeemed, no redemption made this time.', $responseObject->meta->message);
    }

    #[Test]
    public function itFailsIfVoucherSetDoesNotExist()
    {
        $this->user = $this->createUserWithTeam();

        Sanctum::actingAs($this->user, abilities: [
            PersonalAccessTokenAbility::VOUCHER_REDEMPTIONS_CREATE->value,
        ]);

        $voucher = Voucher::factory()->createQuietly();

        $payload = [
            'voucher_id'     => $voucher->id,
            'voucher_set_id' => 'blah',
            'amount'         => 1,
        ];

        $response = $this->postJson($this->apiRoot . $this->endPoint, $payload);
        $response->assertStatus(400);

        $responseObject = json_decode($response->getContent(), false);
        $this->assertSame('The selected voucher set id is invalid.', $responseObject->meta->message);
    }
}
