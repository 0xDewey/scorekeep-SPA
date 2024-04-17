import { Link } from "@inertiajs/react";
import { Children } from "react";

interface DashboardLinkProps {
    children: React.ReactNode;
    innerText: string;
    link: string;
}
export const DashboardLink = (props: DashboardLinkProps) => {
    return (
        <Link
            href={props.link}
            about={`Lien vers ${props.innerText}`}
            className={"dashboard-link"}
        >
            {props.children}
        </Link>
    );
};
