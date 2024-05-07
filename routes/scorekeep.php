<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\LocalTeamController;
use App\Http\Controllers\SAController;
use App\Http\Controllers\VolunteerController;
use Illuminate\Support\Facades\Route;

Route::get('matchs/{localTeamId}', [GameController::class, 'index'])->name('games.index');
Route::post('volunteers/store', [VolunteerController::class, 'store'])->name('volunteers.store');
Route::get('/teams', [LocalTeamController::class, 'index'])->name('teams.index');

Route::middleware('auth')->group(function () {
    Route::post('/dashboard/matchs/upload_ics', [GameController::class, 'uploadIcs'])->name('dashboard.matchs.uploadIcs');

    Route::get('/dashboard/matchs', [DashboardController::class, 'matchsIndex'])->name('dashboard.matchs.index');
    Route::get('/dashboard/matchs/add', [DashboardController::class, 'addMatch'])->name('dashboard.match.add');
    Route::post('/dashboard/matchs/add', [DashboardController::class, 'storeMatch'])->name('dashboard.match.store');
    Route::get('/dashboard/matchs/{uuid}', [DashboardController::class, 'matchShow'])->name('dashboard.match.show');
    Route::patch('/dashboard/matchs/{uuid}', [DashboardController::class, 'matchEdit'])->name('dashboard.match.edit');
    Route::patch('/dashboard/matchs/cancel/{uuid}', [DashboardController::class, 'matchCancel'])->name('dashboard.match.cancel');
    Route::patch('/dashboard/matchs/confirm/{uuid}', [DashboardController::class, 'matchConfirm'])->name('dashboard.match.confirm');
    Route::delete('/dashboard/matchs/{uuid}', [DashboardController::class, 'matchDelete'])->name('dashboard.match.delete');

    Route::get('/dashboard/volunteers', [DashboardController::class, 'volunteers'])->name('dashboard.volunteers');
    Route::post('/dashboard/volunteers', [DashboardController::class, 'storeVolunteers'])->name('dashboard.volunteers.store');

    Route::get('/dashboard/user/add', [SAController::class, 'addUser'])->name('dashboard.user.add');
    Route::post('/dashboard/user/add', [SAController::class, 'createUser'])->name('dashboard.user.create');

    Route::post('/dashboard/local_teams/password', [LocalTeamController::class, 'passwordUpdate'])->name('dashboard.local_teams.password.update');

    Route::get('/dashboard/local_teams/add', [SAController::class, 'addLocalTeam'])->name('dashboard.local_teams.add');
    Route::post('/dashboard/local_teams/add', [SAController::class, 'createLocalTeam'])->name('dashboard.local_teams.create');
});
