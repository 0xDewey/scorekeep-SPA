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
            className={
                "flex flex-col items-center justify-center p-4 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center w-40"
            }
        >
            {props.children}
        </Link>
    );
};
