<?php

use App\Http\Controllers\API\GameController;
use App\Http\Controllers\API\LocalTeamController;
use App\Http\Controllers\API\VisitorTeamController;
use App\Http\Controllers\API\VolunteerController;
use App\Http\Controllers\API\VolunteerTypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('api.public_key')->group(function () {

    Route::group(['middleware' => 'auth:sanctum'], function () {

        Route::put('games/addVolunteers/{gameId}', [GameController::class, 'addVolunteers'])->name('api.games.addVolunteers');
        Route::put('games/{gameId}', [GameController::class, 'update'])->name('api.games.update');
        Route::post('games', [GameController::class, 'store'])->name('api.games.store');
        Route::post('games/confirm', [GameController::class, 'confirm'])->name('api.games.confirm');
        Route::post('games/cancel', [GameController::class, 'cancel'])->name('api.games.cancel');
        Route::post('games/delete', [GameController::class, 'delete'])->name('api.games.delete');

        Route::put('/visitor-teams/{visitorTeamId}', [VisitorTeamController::class, 'update'])->name('api.visitor_teams.update');
    });

    Route::get('games', [GameController::class, 'index'])->name('api.games.index');
    Route::get('weekGames', [GameController::class, 'weekGames'])->name('api.games.weekGames');
    Route::get('games/{gameId}', [GameController::class, 'show'])->name('api.games.show');

    Route::get('/visitor-teams/{visitorTeamId}', [VisitorTeamController::class, 'show'])->name('api.visitor_teams.show');

    Route::get('/local-teams', [LocalTeamController::class, 'index'])->name('api.local_teams.index');

    //Route::post('/local-teams/store', [LocalTeamController::class, 'store'])->name('api.local_teams.store');

    Route::get('/local-teams/{localTeamId}', [LocalTeamController::class, 'show'])->name('api.local_teams.show');

    //Route::put('/local-teams/{localTeamId}', [LocalTeamController::class, 'update'])->name('api.local_teams.update');

    Route::post('volunteers/store', [VolunteerController::class, 'store'])->name('api.volunteers.store');

    Route::get('volunteer-types/show/{volunteerTypeId}', [VolunteerTypeController::class, 'show'])->name('api.volunteers.show');
    Route::get('volunteer-types/show-all', [VolunteerTypeController::class, 'showAll'])->name('api.volunteers.showAll');

});
