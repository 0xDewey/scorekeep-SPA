import { Children, Component, FormEventHandler } from "react";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    className: string;
    onClick?: (() => void) | FormEventHandler;
    disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            className={props.className}
            type={props.type}
            onClick={props?.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};
