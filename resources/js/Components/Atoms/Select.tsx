import React, { ChangeEventHandler } from "react";
import SelectOptionsProps from "@/Models/SelectOptionsProps";

interface SelectProps {
    onChange: ChangeEventHandler<HTMLSelectElement>;
    selectOptions: Array<SelectOptionsProps>;
    value?: string;
    innerText: string;
    name?: string;
    id?: string;
}

export default function Select({
    onChange,
    selectOptions,
    value = "",
    innerText,
    name = "volunteer-type",
    id = "volunteer-type",
}: SelectProps) {
    return (
        <select
            data-testid={"select"}
            name={name}
            id={id}
            onChange={onChange}
            value={value}
            className={
                "block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            }
        >
            <option value="">{innerText}</option>
            {selectOptions.map((option: any, key) => (
                <option key={key} value={option.id}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
