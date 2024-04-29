<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMatchRequest;
use App\Http\Requests\MatchEditRequest;
use App\Http\Requests\RegistrateVoluteersRequest;
use App\Http\Resources\GameResource;
use App\Models\Game;
use App\Models\VisitorTeam;
use App\Models\VolunteerType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function matchsIndex(Request $request)
    {
        $startDate = $request->input('start_date', now());
        $endDate = Carbon::parse($request->input('end_date', now()->addDay(10)))->endOfDay();

        $perPage = $request->input('per_page', 10);

        $query = Game::query();

        $query->where('localTeamId', auth()->user()->localTeamId);
        $query->whereBetween('gameDate', [$startDate, $endDate]);

        $query->where('isDeleted', false);
        $query->with('visitorTeam');

        $games = $query->orderBy('gameDate')->paginate($perPage);

        return Inertia::render('Dashboard/Matchs/Index', [
            'matchs' => GameResource::collection($games),
            'startDate' => $startDate,
            'endDate' => $endDate->format('Y-m-d'),
        ]);
    }

    public function matchShow(Request $request, string $uuid)
    {
        $game = Game::find($uuid);

        $this->authorize('view', $game);

        return Inertia::render('Dashboard/Matchs/Edit', [
            'match' => new GameResource($game),
        ]);
    }

    public function matchEdit(MatchEditRequest $request, string $uuid)
    {
        $data = (object) $request->only([
            'date',
            'address',
            'CPO',
            'city',
        ]);

        $game = Game::find($uuid);

        $this->authorize('view', $game);

        $game->address = "$data->address/$data->CPO/$data->city";
        $game->gameDate = $data->date;
        $game->save();

        return Inertia::render('Dashboard/Matchs/Edit', [
            'match' => new GameResource($game),
        ]);
    }

    public function matchCancel(Request $request, string $uuid)
    {
        $game = Game::find($uuid);

        $this->authorize('view', $game);

        $game->isCancelled = true;
        $game->cancelledDate = now();
        $game->save();

        return back();
    }

    public function matchConfirm(Request $request, string $uuid)
    {
        $game = Game::find($uuid);

        $this->authorize('view', $game);

        $game->isCancelled = false;
        $game->cancelledDate = null;
        $game->save();

        return back();
    }

    public function matchDelete(Request $request, string $uuid)
    {
        $game = Game::find($uuid);

        $this->authorize('view', $game);

        $game->isDeleted = true;
        $game->deletedDate = now();
        $game->save();

        return back();
    }

    public function addMatch(Request $request)
    {
        return Inertia::render('Dashboard/Matchs/Add');
    }

    public function storeMatch(AddMatchRequest $request)
    {
        $validatedData = (object) $request->validated();

        $game = new Game();
        $game->localTeamId = auth()->user()->localTeamId;
        $game->address = "$validatedData->address/$validatedData->CPO/$validatedData->city";
        $game->category = $validatedData->category;
        $game->gameDate = $validatedData->gameDate;
        $game->isHomeMatch = $validatedData->isHomeMatch;

        $visitorTeam = new VisitorTeam();
        $visitorTeam->name = $validatedData->visitorTeamName;

        $visitorTeam->save();

        $game->visitorTeamId = $visitorTeam->uuid;

        $game->save();

        return Inertia::render('Dashboard/Matchs/Add');
    }

    public function volunteers(Request $request)
    {
        $startDate = $request->input('start_date', now());
        $endDate = Carbon::parse($request->input('end_date', now()->addDay(10)))->endOfDay();

        $perPage = $request->input('per_page', 10);

        $query = Game::query();

        $query->with([
            'drinkManagers',
            'roomManagers',
            'secretaries',
            'timekeepers',
            'drinkManager',
            'roomManager',
            'secretary',
            'timekeeper',
        ]);

        $query->where('localTeamId', auth()->user()->localTeamId);
        $query->whereBetween('gameDate', [$startDate, $endDate]);

        $query->where('isDeleted', false);

        $games = $query->orderBy('gameDate')->paginate($perPage);
        $volunteerTypes = VolunteerType::all();

        return Inertia::render('Dashboard/Volunteers', [
            'matchs' => GameResource::collection($games),
            'startDate' => $startDate,
            'endDate' => $endDate->format('Y-m-d'),
            'volunteerTypes' => $volunteerTypes,
        ]);
    }

    public function storeVolunteers(RegistrateVoluteersRequest $request)
    {
        $validatedData = (object) $request->validated();

        $game = Game::find($validatedData->matchId);

        $this->authorize('view', $game);

        $game->timekeeperId = $validatedData->timekeeperId;
        $game->drinkManagerId = $validatedData->drinkManagerId;
        $game->roomManagerId = $validatedData->roomManagerId;
        $game->secretaryId = $validatedData->secretaryId;

        $game->save();

        return back();
    }
}
