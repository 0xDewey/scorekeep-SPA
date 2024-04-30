<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidateVolunteerRegistrationRequest;
use App\Models\Game;
use App\Models\Volunteer;
use Illuminate\Support\Facades\Redirect;

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
