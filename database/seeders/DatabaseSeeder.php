<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Game;
use App\Models\LocalTeam;
use App\Models\VisitorTeam;
use App\Models\VolunteerType;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::create(['name' => 'user']);
        $role = Role::create(['name' => 'admin']);
        $role = Role::create(['name' => 'SA']);

        $user = \App\Models\User::factory()->create([
            'name' => 'Test Sudo',
            'email' => 'sa@example.com',
            'password' => 'password',
        ]);

        $user->assignRole($role);

        VolunteerType::factory()->create(['label' => "Secrétaire"]);
        VolunteerType::factory()->create(['label' => "Chronométreur"]);
        VolunteerType::factory()->create(['label' => "Responsable de salle"]);
        VolunteerType::factory()->create(['label' => "Buvette"]);
    }
}
