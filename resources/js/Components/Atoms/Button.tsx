import { Component, FormEventHandler } from "react";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    onClick?: (() => void) | FormEventHandler;
    disabled?: boolean;
    variant?: "valid" | "option" | "upload" | "error" | "danger" | "default";
    size?: "sm" | "md" | "lg";
}

export const Button = (props: ButtonProps) => {
    // Base classes
    const baseClasses =
        "font-medium py-2.5 px-2 text-text rounded transition-all duration-300 border border-solid cursor-pointer disabled:opacity-60 disabled:cursor-wait";

    // Variant classes
    const variantClasses = {
        valid: "bg-primary border-blue-100 text-blue-100 hover:text-text hover:border-primary hover:bg-blue-100",
        option: "bg-green-600 border-blue-100 text-blue-100 hover:text-text hover:border-green-600 hover:bg-blue-100",
        upload: "bg-green-500 text-white py-2.5 px-4 border-0 rounded cursor-pointer flex items-center gap-2.5 hover:bg-green-600",
        error: "bg-button-error hover:bg-blue-100",
        danger: "bg-red-600 text-blue-100 hover:text-text hover:bg-blue-100",
        default: "bg-gray-200 hover:bg-gray-300",
    };

    // Size classes
    const sizeClasses = {
        sm: "py-1.5 px-3 text-sm",
        md: "py-2.5 px-4",
        lg: "py-3 px-6 text-lg",
    };

    // Build className
    const variant = props.variant || "default";
    const size = props.size || "md";
    const customClass = props.className || "";

    // Handle legacy className props
    let finalVariant = variant;
    if (customClass.includes("valid")) finalVariant = "valid";
    if (customClass.includes("option")) finalVariant = "option";
    if (customClass.includes("upload-button")) finalVariant = "upload";
    if (customClass.includes("error")) finalVariant = "error";
    if (customClass.includes("danger")) finalVariant = "danger";

    const className =
        `${baseClasses} ${variantClasses[finalVariant]} ${sizeClasses[size]} ${customClass}`.trim();

    return (
        <button
            className={className}
            type={props.type}
            onClick={props?.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};
