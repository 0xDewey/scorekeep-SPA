<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\LocalTeam;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\CreateLocalTeamRequest;
use App\Http\Resources\SelectOptionRoleResource;
use App\Http\Resources\SelectOptionLocalTeamResource;
use App\Notifications\SendTemporaryPassword;

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
            "roles" => SelectOptionRoleResource::collection($roles),
            "localTeams" => SelectOptionLocalTeamResource::collection($localTeams),
        ]);
    }

    public function createUser(CreateUserRequest $request)
    {
        $role = Role::findById($request->role);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->assignRole($role);

        $user->notify(new SendTemporaryPassword($request->password));

        return redirect(route('dashboard', absolute: false));
    }

    public function addLocalTeam()
    {
        return Inertia::render('Dashboard/LocalTeams/Add');
    }

    public function createLocalTeam(CreateLocalTeamRequest $request)
    {
        $LocalTeam = LocalTeam::create([
            'name' => $request->name,
            'logo' => $request->logo,
            'password' => Hash::make($request->password),
        ]);

        return redirect(route('dashboard', absolute: false));
    }
}
