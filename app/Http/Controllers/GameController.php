<?php

namespace App\Http\Controllers;

use ICal\ICal;
use Carbon\Carbon;
use App\Models\Game;
use App\Models\User;
use Inertia\Inertia;
use App\Models\LocalTeam;
use App\Models\VisitorTeam;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\VolunteerType;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\GameResource;
use Illuminate\Support\Facades\Storage;

class GameController extends Controller
{
    public function index(Request $request, string $localTeamId)
    {
        $startDate = now();
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
            'volunteerTypes' => $volunteerTypes,
        ]);
    }

    public function uploadIcs(Request $request)
    {
        $user = User::find(
            auth()->user()->id
        );

        $request->validate(['calendar' => 'required|file|mimes:ics,txt']);

        $path = $request->file('calendar')->store('temp');

        $result = $this->processIcs($path);

        if ($result->status() === 500) {
            return $result;
        }

        $roles = [];

        foreach ($user->roles()->get() as $role) {
            $roles[] = $role->name;
        }

        return Inertia::render('Dashboard/Index', [
            'roles' => $roles,
        ]);
    }

    private function processIcs($path)
    {
        try {
            $ical = new ICal(storage_path('app/' . $path), array(
                'defaultSpan'                 => 2,
                'defaultTimeZone'             => 'UTC',
                'defaultWeekStart'            => 'MO',
                'skipRecurrence'              => false,
                'useTimeZoneWithRRules'       => false,
            ));

            foreach ($ical->events() as $event) {
                $address = $this->addressFormat($event->location);

                $localTeam = LocalTeam::find(auth()->user()->localTeamId);

                $visitorTeamName = str_replace($localTeam->name, '', $event->summary);
                $visitorTeamName = str_replace("vs", '', $visitorTeamName);
                $visitorTeamName = trim($visitorTeamName);

                $visitorTeam = VisitorTeam::where('name', $visitorTeamName)->firstOrCreate([
                    'name' => $visitorTeamName
                ]);

                $category = explode(' - ', $event->description)[0];
                $gameDate = Carbon::createFromTimestamp($event->dtstart_array[2]);

                $isHomeMatch = Str::startsWith($event->summary, strtoupper($localTeam->name));

                Game::updateOrCreate(
                    [
                        'ffhUid' => $event->uid,
                        'localTeamId' => $localTeam->uuid,
                    ],
                    [
                        'isHomeMatch' => $isHomeMatch,
                        'address' => $address,
                        'visitorTeamId' => $visitorTeam->uuid,
                        'gameDate' => $gameDate,
                        'category' => $category,
                    ]
                );
            }

            Storage::delete($path);
            return response()->json(['message' => 'Traitement réussi'], 200);
        } catch (\Exception $e) {
            Log::info($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function addressFormat(string $location): string
    {
        $content = explode(", ", $location);
        array_shift($content);

        $final = "";

        foreach ($content as $address) {
            if (preg_match('/(\d{5}|\d[A-B]\d{3})/', $address, $matches)) {
                $streetName = trim(explode($matches[0], $address)[0]);
                $final .= $streetName . "/";
                $final .= $matches[0] . "/";
            }
        }

        $final .= $content[1];
        return $final;
    }
}
