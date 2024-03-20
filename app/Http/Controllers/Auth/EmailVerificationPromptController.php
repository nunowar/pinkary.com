<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

final readonly class EmailVerificationPromptController
{
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): RedirectResponse|View
    {
        $user = $request->user();
        assert($user instanceof User);

        return $user->hasVerifiedEmail()
                    ? redirect()->intended(route('profile.show', [
                        'user' => $user->username,
                    ], absolute: false)) : view('auth.verify-email');
    }
}