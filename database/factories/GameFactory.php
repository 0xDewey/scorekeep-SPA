<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Game>
 */
class GameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Sénior M1', 'Sénior M2', 'Sénior F1', 'Sénior F2', 'U11 F', 'U11 M', 'U16 M', 'U16 F', 'U18 F', 'U18 M'];
        do {
            $gameDate = Carbon::instance(fake()->dateTimeBetween('now', '+15 days'));
        } while (! $gameDate->isWeekend());

        return [
            'address' => fake('fr_FR')->streetAddress().'/'.fake('fr_FR')->postcode().'/'.fake('fr_FR')->city(),
            'category' => fake()->randomElement($categories),
            'gameDate' => $gameDate,
            'visitorTeamId' => null,
            'localTeamId' => null,
            'isHomeMatch' => fake()->boolean(),
        ];
    }

    /**
     * Indicate that the game should have valid team relationships.
     */
    public function withTeams(): static
    {
        return $this->state(function (array $attributes) {
            $visitorTeam = \App\Models\VisitorTeam::factory()->create();
            $localTeam = \App\Models\LocalTeam::factory()->create();

            return [
                'visitorTeamId' => $visitorTeam->uuid,
                'localTeamId' => $localTeam->uuid,
            ];
        });
    }
}
