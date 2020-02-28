<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuthUser extends Model
{
    public function plans() {
        return $this->hasMany(PlanTable::class, 'uid');    // select * from PlanTable where user_id = current_user_id;
    }          // here "uid": foregin key

    public function plansByMonth($year, $month) {
        return $this->hasMany(PlanTable::class, 'uid')
                    ->where('year', $year)
                    ->where('month', $month);
    }
}

// hasOne,
// hasMany
// belongsTo
// belongsToMany
// morphMany
// morphToMany