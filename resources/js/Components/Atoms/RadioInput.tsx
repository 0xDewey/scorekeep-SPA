import React from "react";

interface RadioInputProps {
    id: string;
    text: string;
    name: string;
    isSelected: boolean;
    onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioInput(props: RadioInputProps) {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onSelect(e);
    };

    return (
        <div
            data-testid={"parent-div"}
            className={`flex items-center space-x-2 p-2 rounded-md ${
                props.isSelected ? "bg-primary/10" : ""
            }`}
        >
            <input
                type="radio"
                id={props.id}
                name={props.name}
                checked={props.isSelected}
                className={"form-radio h-4 w-4 text-primary"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleRadioChange(e);
                }}
            />
            <label htmlFor={props.id} className={"text-sm"}>
                {props.text}
            </label>
        </div>
    );
}
