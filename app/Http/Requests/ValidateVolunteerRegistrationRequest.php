<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateVolunteerRegistrationRequest extends FormRequest
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
            'name' => 'required|string',
            //            'email' => 'required|email',
            'volunteerTypeId' => 'required|int|exists:volunteer_types,id',
            'gameId' => 'required|uuid|exists:games,uuid',
            'token' => 'required|numeric|exists:local_teams,token',
        ];
    }
}
