<?php

namespace App\Http\Controllers\API;

use App\Exceptions\TokenMismatch;
use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateVolunteerRegistrationRequest;
use App\Models\Game;
use App\Models\LocalTeam;
use App\Models\Volunteer;

class VolunteerController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function insert(string $name, string $email, string $volunteerTypeId)
    {
        try {
            $volunteer = new Volunteer;
            $volunteer->name = $name;
            $volunteer->email = $email;
            $volunteer->volunteerTypeId = $volunteerTypeId;

            $volunteer->save();
        } catch (\Throwable $e) {
            throw $e;
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ValidateVolunteerRegistrationRequest $request)
    {
        $validatedData = $request->validated();

        try {
            $game = Game::findOrFail($validatedData['gameId']);
            $token = LocalTeam::findOrFail($game->localTeamId)->token;

            if ($validatedData['token'] != $token) {
                throw new TokenMismatch;
            }

            $volunteer = new Volunteer;

            $volunteer->name = $validatedData['name'];
            //            $volunteer->email = $validatedData['email'];
            $volunteer->gameId = $validatedData['gameId'];
            $volunteer->volunteerTypeId = $validatedData['volunteerTypeId'];

            $volunteer->save();

            return response()->json([
                'message' => 'Bénévole enregistré avec succès',
            ], 201);
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Erreur lors de l\'enregistrement du bénévole'], 404);
        }
    }
}
