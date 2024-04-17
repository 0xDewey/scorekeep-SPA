<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\VolunteerType;
use App\Http\Resources\GameResource;
use App\Models\LocalTeam;

class GameController extends Controller
{
    public function index(Request $request, string $localTeamId)
    {
        $startDate =  now();
        $endDate = now()->addDay(10);

        $perPage = $request->input('per_page', 10);

        $localTeamName = LocalTeam::find($localTeamId)->name;

        $query = Game::query();

        $query->where('localTeamId', $localTeamId);
        $query->whereBetween('gameDate', [$startDate, $endDate]);

        $query->where('isDeleted', false);
        $query->with('visitorTeam');

        $games = $query->orderBy('gameDate')->paginate($perPage);
        $volunteerTypes = VolunteerType::all();

        return Inertia::render('Matchs', [
            'matchs' => GameResource::collection($games),
            'localTeamName' => $localTeamName,
            'volunteerTypes' => $volunteerTypes
        ]);
    }
}
