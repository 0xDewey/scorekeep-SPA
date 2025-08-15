import { Link } from "@inertiajs/react";

interface FooterLinkProps {
    link: string;
    innerText: string;
}

export const FooterLink = (props: FooterLinkProps) => {
    return (
        <Link
            className={
                "text-center text-sm text-text hover:text-primary transition-colors duration-200 block"
            }
            href={props.link}
            about={`Lien vers ${props.innerText}`}
        >
            {props.innerText}
        </Link>
    );
};
