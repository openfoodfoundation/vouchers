<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Voucher extends Model
{
    use HasFactory;
    use HasUuids;
    use SoftDeletes;

    protected $keyType   = 'string';
    public $incrementing = false;

    //    protected $appends   = [
    //        'voucher_code',
    //    ];
    protected $casts = [
        'expires_at' => 'datetime',
    ];
    protected $dispatchesEvents = [

    ];

    /**
     * @return BelongsTo
     */
    public function createdByTeam(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'created_by_team_id', 'id');
    }

    /**
     * @return BelongsTo
     */
    public function allocatedToServiceTeam(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'allocated_to_service_team_id', 'id');
    }

    /**
     * @return BelongsTo
     */
    public function voucherSet(): BelongsTo
    {
        return $this->belongsTo(VoucherSet::class, 'voucher_set_id', 'id');
    }

    //    /**
    //     * @return HasMany
    //     */
    //    public function voucherRedemptions(): HasMany
    //    {
    //        return $this->hasMany(VoucherRedemption::class, 'voucher_id', 'id')->orderBy('created_at', 'desc');
    //    }

    //    /**
    //     * Get the voucher's voucher_code
    //     *
    //     * @return Attribute
    //     */
    //    public function voucherCode(): Attribute
    //    {
    //        return Attribute::make(
    //            get: fn ($value, $attributes) => substr($attributes['id'], 0, 5),
    //        );
    //    }
}
