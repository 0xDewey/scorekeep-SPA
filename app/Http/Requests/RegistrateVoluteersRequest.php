<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrateVoluteersRequest extends FormRequest
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
            'timekeeperId' => 'string|uuid|nullable',
            'drinkManagerId' => 'string|uuid|nullable',
            'roomManagerId' => 'string|uuid|nullable',
            'matchId' => 'string|uuid|required',
            'secretaryId' => 'string|uuid|nullable',
        ];
    }
}
