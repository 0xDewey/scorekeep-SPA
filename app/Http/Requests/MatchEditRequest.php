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
            'date' => 'required|after_or_equal:today',
            'address' => 'nullable|string|max:30',
            'CPO' => 'nullable|numeric|digits:5',
            'city' => 'nullable|string|max:30',
        ];
    }
}
