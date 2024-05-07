<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @property int ffhUid
 * @property string address
 * @property string visitorTeamId
 * @property string timekeeperId
 * @property string secretaryId
 * @property string roomManagerId
 * @property string localTeamId
 * @property bool isHomeMatch
 * @property bool isCancelled
 * @property date cancelledDate
 * @property bool isDeleted
 * @property date deletedDate
 */
class Game extends BaseModel
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ffhUid',
        'gameDate',
        'category',
        'address',
        'visitorTeamId',
        'timekeeperId',
        'secretaryId',
        'roomManagerId',
        'localTeamId',
        'isHomeMatch',
        'isCancelled',
        'cancelledDate',
        'isDeleted',
        'deletedDate',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'gameDate' => 'datetime',
    ];

    /**
     * Get the scorekeeper associated with the game.
     */
    public function localTeam(): BelongsTo
    {
        return $this->belongsTo(LocalTeam::class);
    }

    public function volunteers()
    {
        return $this->hasMany(Volunteer::class, 'gameId', 'uuid');
    }

    /**
     * Get the scorekeeper associated with the game.
     */
    public function timekeepers()
    {
        return $this->volunteers()->where('volunteerTypeId', 2);
    }

    /**
     * Get the secretary associated with the game.
     */
    public function secretaries()
    {
        return $this->volunteers()->where('volunteerTypeId', 1);
    }

    /**
     * Get the roomManager associated with the game.
     */
    public function roomManagers()
    {
        return $this->volunteers()->where(
            'volunteerTypeId',
            3
        );
    }

    /**
     * Get the roomManager associated with the game.
     */
    public function drinkManagers()
    {
        return $this->volunteers()->where(
            'volunteerTypeId',
            4
        );
    }

    public function timekeeper(): HasOne
    {
        return $this->hasOne(
            Volunteer::class,
            'uuid',
            'gameId'
        )->where('volunteerTypeId', 2);
    }

    public function roomManager(): HasOne
    {
        return $this->hasOne(
            Volunteer::class,
            'uuid',
            'gameId'
        )->where('volunteerTypeId', 3);
    }

    public function secretary(): HasOne
    {
        return $this->hasOne(
            Volunteer::class,
            'uuid',
            'gameId'
        )->where('volunteerTypeId', 1);
    }

    public function drinkManager(): HasOne
    {
        return $this->hasOne(
            Volunteer::class,
            'uuid',
            'gameId'
        )->where('volunteerTypeId', 4);
    }

    /**
     * Get the visitorTeam associated with the game.
     */
    public function visitorTeam(): HasOne
    {
        return $this->hasOne(VisitorTeam::class, 'uuid', 'visitorTeamId');
    }
}
