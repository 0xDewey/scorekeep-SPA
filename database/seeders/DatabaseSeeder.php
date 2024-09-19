<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Game;
use App\Models\LocalTeam;
use App\Models\VisitorTeam;
use App\Models\VolunteerType;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::create(['name' => 'SA']);

        $user = \App\Models\User::factory()->create([
            'name' => 'Test Sudo',
            'email' => 'sa@example.com',
            'password' => 'password',
        ]);

        $user->assignRole($role);

        VolunteerType::factory()->create(['label' => 'Secrétaire']);
        VolunteerType::factory()->create(['label' => 'Chronométreur']);
        VolunteerType::factory()->create(['label' => 'Responsable de salle']);
        VolunteerType::factory()->create(['label' => 'Buvette']);

        $localTeam = LocalTeam::factory()->create(['token' => 123456]);
        $role = Role::create(['name' => 'user']);
        $role = Role::create(['name' => 'admin']);

        $user = \App\Models\User::factory()->create([
            'name' => 'Test user',
            'email' => 'user@example.com',
            'password' => 'password',
            'localTeamId' => $localTeam->uuid,
        ]);

        $user->assignRole($role);

        $visitorTeams = VisitorTeam::factory(10)->create();

        foreach (range(1, 10) as $index) {
            Game::factory()->create([
                'localTeamId' => $localTeam->uuid,
                'visitorTeamId' => $visitorTeams->random()->uuid,
            ]);
        }

        foreach (range(1, 90) as $index) {
            Game::factory()->create([
                'gameDate' => fake('fr_FR')->dateTimeBetween('+10 days', '+3 months'),
                'localTeamId' => $localTeam->uuid,
                'visitorTeamId' => $visitorTeams->random()->uuid,
            ]);
        }
    }
}
