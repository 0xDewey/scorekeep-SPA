<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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

        return [
            'address' => fake('fr_FR')->streetAddress() . '/' . fake('fr_FR')->postcode() . '/' . fake('fr_FR')->city(),
            'category' => fake()->randomElement($categories),
            'gameDate' => fake('fr_FR')->dateTimeBetween('+5 days', '+10 days'),
            'visitorTeamId' => rand(1, 15),
            'isHomeMatch' => fake()->boolean(),
        ];
    }
}
