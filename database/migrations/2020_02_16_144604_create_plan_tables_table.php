<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlanTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_tables', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('uid');      
            $table->integer('year');
            $table->integer('month');
            $table->integer('nWeek');
            $table->decimal('nPrice', 8, 2);
            $table->longText('tPerform');
            $table->longText('tExecution');
            $table->longText('tExtra');
            $table->integer('nEditStatus');
            $table->integer('nCheckStatus');
            $table->decimal('dReality', 8, 2);
            $table->timestamps();

            $table->foreign('uid')
                ->references('id')
                ->on('auth_users')
                ->onDelete('cascade'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plan_tables');
    }
}
