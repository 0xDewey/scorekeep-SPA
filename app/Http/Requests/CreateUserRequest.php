<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'local_team' => 'required_if:role,1|required_if:role,2|string|exists:local_teams,id',
            'role' => 'required|string|exists:roles,id',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', Password::defaults()],
        ];
    }

    public function messages()
    {
        return [
            'local_team.required_if' => "Si le rôle est utilisateur/admin, l'équipe doit être renseignée."
        ];
    }
}
