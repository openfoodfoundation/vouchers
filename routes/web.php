<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\CheckAdminStatus;
use App\Models\TeamUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/api-documentation', function () {
    return View::make('scribe.index');
});

Route::get('/', function () {
    return Redirect::to('/dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/my-team', function () {
        return Inertia::render('App/MyTeam');
    })->name('my-team');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/audit-trail', function () {
        return Inertia::render('AuditItems');
    })->name('audit-trail');

    Route::get('/switch-team/{id}', function ($id) {

        $teamUserForThisTeam = TeamUser::where('user_id', Auth::id())
            ->where('team_id', $id)->first();

        if ($teamUserForThisTeam) {
            Auth::user()->current_team_id = $id;
            Auth::user()->save();

        }

        return Redirect::to('/my-team');

    })->name('switch-team');

    /**
     * Admin routes
     */
    Route::prefix('admin')->middleware([CheckAdminStatus::class])->group(function () {
        Route::get('/', function () {
            return Inertia::render('Admin/AdminHome');
        })->name('admin.home');

        Route::get('/audit-trail', function () {
            return Inertia::render('AuditItems');
        })->name('admin.audit-trail');

        Route::get('/users', function () {
            return Inertia::render('Admin/Users/Users');
        })->name('admin.users');

        Route::get('/user/{id}', function (int $id) {
            return Inertia::render('Admin/Users/User', [
                'id' => $id,
            ]);
        })->name('admin.user');

        Route::get('/teams', function () {
            return Inertia::render('Admin/Teams/Teams');
        })->name('admin.teams');

        Route::get('/teams/new', function () {
            return Inertia::render('Admin/Teams/TeamNew');
        })->name('admin.teams.new');

        Route::get('/team/{id}', function (int $id) {
            return Inertia::render('Admin/Teams/Team', [
                'id' => $id,
            ]);
        })->name('admin.team');
    });

});

require __DIR__ . '/auth.php';
