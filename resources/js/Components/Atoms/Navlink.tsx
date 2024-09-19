import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

interface NavlinkProps {
    innerText: string;
    link: string;
    isActive?: boolean;
}

export const Navlink = (props: NavlinkProps) => {
    const [className, setClassName] = useState<string>("");

    useEffect(() => {
        props.isActive ? setClassName("active") : setClassName("");
    }, [props.isActive]);

    return (
        <Link
            href={props.link}
            about={`Lien de navigation pour : ${props.innerText.toLowerCase()}`}
            className={`navlink text-md ${className}`}
        >
            {props.innerText}
        </Link>
    );
};
