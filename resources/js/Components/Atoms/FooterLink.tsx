import { Link } from "@inertiajs/react";

interface FooterLinkProps {
    link: string;
    innerText: string;
}

export const FooterLink = (props: FooterLinkProps) => {
    return (
        <Link
            className={"footer-link text-center"}
            href={props.link}
            about={`Lien vers ${props.innerText}`}
        >
            {props.innerText}
        </Link>
    );
};
