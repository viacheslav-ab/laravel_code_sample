<?php

namespace App\Http\Controllers;

use App\AuthUser;
use App\PlanTable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Request;

class PlanTableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'idToken'   => 'required',
            'year'      => 'required',
            'month'     => 'required',
            'nWeek'     => 'required'
        ]);

        $result                         = array();
        $result['status']               = 0;
        $result['msg']                  = "Something error.";

        $macher = [
            'year'      => $request->year,
            'month'     => $request->month,
            'nWeek'     => $request->nWeek
        ];

        $user = AuthUser::where(['idToken' => $request->idToken])->first();
        // $result = $user->plansByMonth(2020, 2);
        // $result = $user->plans;
        $current_plan = PlanTable::join('auth_users', 'auth_users.id', '=', 'plan_tables.uid')
            ->select('plan_tables.id')
            ->where('auth_users.idToken', $request->idToken)
            ->where('plan_tables.year', $request->year)
            ->where('plan_tables.month', $request->month)
            ->where('plan_tables.nWeek', $request->nWeek)
            ->first();

        if ($current_plan) {
            $current_plan->nPrice       = $request->nPrice ? $request->nPrice : 0;
            $current_plan->tPerform     = $request->tPerform ? $request->tPerform : '';
            $current_plan->tExecution   = $request->tExecution ? $request->tExecution : '';
            $current_plan->tExtra       = $request->tExtra ? $request->tExtra : '';
            $current_plan->nEditStatus  = $request->nEditStatus;
            $isUpdated = $current_plan->save();

            if ($isUpdated) {
                $result['status']               = 1;
                $result['msg']                  = "Update successfuly!";
            }
        } else {
            $plan = new PlanTable();
            $plan->uid          = $user->id;
            $plan->year         = $request->year;
            $plan->month        = $request->month;
            $plan->nWeek        = $request->nWeek;
            $plan->nPrice       = $request->nPrice ? $request->nPrice : 0;
            $plan->tPerform     = $request->tPerform ? $request->tPerform : '';
            $plan->tExecution   = $request->tExecution ? $request->tExecution : '';
            $plan->tExtra       = $request->tExtra ? $request->tExtra : '';
            $plan->nEditStatus  = $request->nEditStatus;
            $plan->nCheckStatus = $request->nCheckStatus;
            $plan->dREality     = 0;
            $isSaved = $plan->save();

            if ($isSaved) {
                $result['status']               = 1;
                $result['msg']                  = "Save successfuly!";
            }
        }

        return $result;
    }

    public function fetchMonthPlan(Request $request)
    {
        $this->validate($request, [
            'idToken'   => 'required',
            'year'      => 'required',
            'month'     => 'required'
        ]);

        $macher = [
            'year'      => $request->year,
            'month'     => $request->month
        ];

        $result                         = array();
        $result['status']               = 0;
        $result['msg']                  = "Something error.";

        $plans = PlanTable::join('auth_users', 'auth_users.id', '=', 'plan_tables.uid')
            ->select('nWeek', 'nPrice', 'tPerform', 'tExecution', 'tExtra', 'nEditStatus', 'nCheckStatus')
            ->where('auth_users.idToken', $request->idToken)
            ->where($macher)
            ->orderBy('nWeek')  //->orderBy('nWeek', 'desc')
            ->get();

        $result['status']   = 1;
        $result['msg']      = "Fetch Success!";
        $result['data']     = $plans;

        return $result;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PlanTable  $planTable
     * @return \Illuminate\Http\Response
     */
    public function show(PlanTable $planTable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PlanTable  $planTable
     * @return \Illuminate\Http\Response
     */
    public function edit(PlanTable $planTable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PlanTable  $planTable
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PlanTable $planTable)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PlanTable  $planTable
     * @return \Illuminate\Http\Response
     */
    public function destroy(PlanTable $planTable)
    {
        //
    }
}
