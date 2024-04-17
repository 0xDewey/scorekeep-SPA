<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\LocalTeam;
use App\Models\Volunteer;
use Illuminate\Http\Request;
use App\Exceptions\TokenMismatch;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ValidateVolunteerRegistrationRequest;

class VolunteerController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(ValidateVolunteerRegistrationRequest $request)
    {
        $validatedData = (object) $request->only(['name', 'gameId', 'volunteerTypeId']);

        $volunteer = new Volunteer();

        $volunteer->name = $validatedData->name;
        //            $volunteer->email = $validatedData->email;
        $volunteer->gameId = $validatedData->gameId;
        $volunteer->volunteerTypeId = $validatedData->volunteerTypeId;

        $volunteer->save();

        $localTeamId = Game::find($validatedData->gameId)->localTeamId;

        return Redirect::route('games.index', [$localTeamId]);
    }
}
