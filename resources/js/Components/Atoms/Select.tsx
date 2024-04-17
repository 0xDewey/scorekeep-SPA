import React, { ChangeEventHandler } from "react";
import SelectOptionsProps from "@/Models/SelectOptionsProps";

interface SelectProps {
    onChange: ChangeEventHandler<HTMLSelectElement>;
    selectOptions: Array<SelectOptionsProps>;
    value: string;
}

export default function Select(props: SelectProps) {
    return (
        <select
            data-testid={"select"}
            name="volunteer-type"
            id="volunteer-type"
            onChange={props.onChange}
        >
            <option value="">Sélectionner le type de poste</option>
            {props.selectOptions.map((option: any, key) => (
                <option key={key} value={option.id}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
