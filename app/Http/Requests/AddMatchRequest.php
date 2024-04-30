<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class AddMatchRequest extends FormRequest
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
            'address' => 'nullable|string',
            'CPO' => 'nullable|numeric|digits:5',
            'city' => 'nullable|string',
            'category' => 'required|string',
            'visitorTeamName' => 'required|string',
            'isHomeMatch' => 'required|boolean',
            'gameDate' => [
                'required',
                'date',
                'after:'.Carbon::now('Europe/Paris')->toDateTimeString(),
            ],
        ];
    }
}
