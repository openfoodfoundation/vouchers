<?php

namespace App\Notifications\Mail\VoucherSetMerchantTeamApprovalRequest;

use App\Models\VoucherSet;
use App\Models\VoucherSetMerchantTeamApprovalRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\URL;

class VoucherSetMerchantTeamApprovalRequestEmailNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @param VoucherSetMerchantTeamApprovalRequest $request
     */
    public function __construct(public VoucherSetMerchantTeamApprovalRequest $request) {}

    /**
     * Get the notification's delivery channels.
     *
     * @param object $notifiable
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param object $notifiable
     *
     * @return MailMessage
     */
    public function toMail(object $notifiable): MailMessage
    {
        $urlApprove = URL::temporarySignedRoute(
            'voucher-set-merchant-team-approval-request-approved',
            now()->addDays(2),
            ['id' => $this->request->id]
        );

        $urlReject = URL::temporarySignedRoute(
            'voucher-set-merchant-team-approval-request-rejected',
            now()->addDays(2),
            ['id' => $this->request->id]
        );

        $voucherSet = VoucherSet::with('createdByTeam')->find($this->request->voucher_set_id);

        return (new MailMessage())
            ->subject('A Vine voucher set has been generated for your service')
            ->markdown('mail.voucher-set-approval-request', [
                'voucherSetId' => $this->request->voucher_set_id,
                'createdBy'    => $voucherSet->createdByTeam->name,
                'approve'      => $urlApprove,
                'reject'       => $urlReject,
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param object $notifiable
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [

        ];
    }
}
