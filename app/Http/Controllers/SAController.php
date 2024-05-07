<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLocalTeamRequest;
use App\Http\Requests\CreateUserRequest;
use App\Http\Resources\SelectOptionLocalTeamResource;
use App\Http\Resources\SelectOptionRoleResource;
use App\Models\LocalTeam;
use App\Models\User;
use App\Notifications\SendTemporaryPassword;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class SAController extends Controller
{
    public function __construct()
    {
        $this->middleware('check_role:SA');
    }

    public function addUser()
    {
        $roles = Role::all();
        $localTeams = LocalTeam::all();

        return Inertia::render('Dashboard/Users/Add', [
            'roles' => SelectOptionRoleResource::collection($roles),
            'localTeams' => SelectOptionLocalTeamResource::collection($localTeams),
        ]);
    }

    public function createUser(CreateUserRequest $request)
    {
        $role = Role::findById($request->role);

        $localTeamId = $request->local_team ?? null;

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'localTeamId' => $localTeamId,
            'password' => Hash::make($request->password),
        ]);

        $user->assignRole($role);

        $user->notify(new SendTemporaryPassword($request->password));

        $roles = Role::all();
        $localTeams = LocalTeam::all();

        return Inertia::render('Dashboard/Users/Add', [
            'roles' => SelectOptionRoleResource::collection($roles),
            'localTeams' => SelectOptionLocalTeamResource::collection($localTeams),
        ]);
    }

    public function addLocalTeam()
    {
        return Inertia::render('Dashboard/LocalTeams/Add');
    }

    public function createLocalTeam(CreateLocalTeamRequest $request)
    {
        $LocalTeam = LocalTeam::create([
            'ffhName' => $request->ffhName,
            'name' => $request->name,
            'logo' => $request->logo,
            'password' => Hash::make($request->password),
        ]);

        return redirect(route('dashboard', absolute: false));
    }
}
