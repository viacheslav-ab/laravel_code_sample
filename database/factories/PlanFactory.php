<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\PlanTable;
use Faker\Generator as Faker;

$factory->define(PlanTable::class, function (Faker $faker) {
    return [
        'uid'   => factory(\App\AuthUser::class),
        'year'  => 2020,
        'month' => 2,
        'nWeek' => 2,
        'nPrice'    => $faker->numerify()
    ];
});
