import React from "react";

interface SwitchProps {
    isOn: boolean;
    handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    textOne?: string;
    textTwo?: string;
    colorOne?: string;
    colorTwo?: string;
}

export const Switch = ({
    isOn,
    handleToggle,
    textOne = "On",
    textTwo = "Off",
    colorOne = "#4f46e5",
    colorTwo = "#cbd5e1",
}: SwitchProps) => {
    return (
        <div className={"flex items-center space-x-3"}>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="sr-only"
                id={`switch`}
                type="checkbox"
                aria-checked={isOn}
            />
            <label
                style={{ background: isOn ? colorOne : colorTwo }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                htmlFor={`switch`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isOn ? "translate-x-5" : "translate-x-1"
                    }`}
                />
            </label>
            <p className="text-sm text-gray-700">{isOn ? textOne : textTwo}</p>
        </div>
    );
};
