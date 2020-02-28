<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlanTable extends Model
{
    public function user() {
        return $this->belongsTo(AuthUser::class); // select * from AuthUser where PlanTable_id = current_plan_id;
    }
}
