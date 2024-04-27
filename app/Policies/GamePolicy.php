<?php

namespace App\Policies;

use App\Models\Game;
use App\Models\User;

class GamePolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function view(User $user, Game $game)
    {
        return $game->localTeamId === $user->localTeamId || auth()->user()->isAdmin();
    }
}
