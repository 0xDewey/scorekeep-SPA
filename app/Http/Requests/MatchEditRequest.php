<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MatchEditRequest extends FormRequest
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
            'date' => "after_or_equal:today",
            'address' => "string|max:30",
            'CPO' => "numeric|digits:5",
            'city' => "string|max:30"
        ];
    }
}
