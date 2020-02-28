<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('{any}', function () {
    return view('welcome');
})->where('any','.*');

Route::post('/signup', 'AuthUserController@store');
Route::post('/signin', 'AuthUserController@signin');
Route::post('/logout', 'AuthUserController@logout');
Route::post('/validateToken', 'AuthUserController@validateToken');

Route::post('/sendWeekPlan', 'PlanTableController@store');
Route::post('/fetchmonthplan', 'PlanTableController@fetchMonthPlan');