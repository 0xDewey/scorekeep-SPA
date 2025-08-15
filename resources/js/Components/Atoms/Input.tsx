import { ChangeEventHandler, useState } from "react";

interface InputProps {
    type: string;
    field: string;
    value?: string;
    maxLength?: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
    error?: string;
}

export function Input(props: InputProps) {
    const label: string =
        props.field.charAt(0).toUpperCase() +
        props.field.substring(1, props.field.length);
    const name: string = props.field.includes("mot de passe")
        ? "password"
        : props.field;
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [value, setValue] = useState<string>(props.value || "");
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const maxLength = props.maxLength || 255;
    const hasValue = value.length > 0;
    const hasError = !!props.error;

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
        return props.onChange(e);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Tailwind classes
    const containerClasses = `
        relative mb-6
        ${isFocused ? "focused" : ""}
        ${hasValue ? "has-value" : ""}
        ${hasError ? "has-error" : ""}
    `.trim();

    const inputClasses = `
        w-full px-4 py-3 border rounded-lg
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2
        ${
            hasError
                ? "border-input-error focus:border-input-error focus:ring-input-error"
                : "border-gray-300 focus:border-primary focus:ring-primary focus:ring-opacity-50"
        }
        ${hasValue || isFocused ? "pt-6 pb-2" : "py-3"}
    `.trim();

    const labelClasses = `
        absolute left-4 transition-all duration-300 ease-in-out pointer-events-none
        ${
            hasValue || isFocused
                ? "top-2 text-xs text-gray-600 font-medium"
                : "top-3 text-base text-gray-500"
        }
        ${hasError ? "text-input-error" : ""}
    `.trim();

    const toggleClasses = `
        absolute right-4 top-1/2 transform -translate-y-1/2
        text-sm text-primary cursor-pointer hover:text-primary-dark
        transition-colors duration-200
    `.trim();

    return (
        <div className={containerClasses} data-testid={"input-test"}>
            <label
                htmlFor={props.field}
                className={labelClasses}
                aria-label={props.field}
            >
                {label}
            </label>
            <input
                id={props.field}
                type={passwordVisible ? "text" : props.type}
                aria-required
                maxLength={maxLength}
                value={value}
                name={name}
                required
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                className={inputClasses}
            />
            {name === "password" && (
                <div
                    className={toggleClasses}
                    onClick={togglePasswordVisibility}
                >
                    {passwordVisible ? "Cacher" : "Afficher"}
                </div>
            )}
            {hasError && (
                <div className="mt-1 text-sm text-input-error">
                    {props.error}
                </div>
            )}
        </div>
    );
}
