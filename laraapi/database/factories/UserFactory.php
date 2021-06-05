<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => \Hash::make('12345678'),
            'remember_token' => Str::random(10),
            'age' => $this->faker->numberBetween(18,99),
            'province' => $this->faker->state(),
            'phone' => $this->faker->phoneNumber(16),
            'lastname' => $this->faker->lastName()
        ];
    }
}
