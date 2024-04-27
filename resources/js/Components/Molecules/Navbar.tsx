import { Navlink } from "../Atoms/Navlink";
import { Logout } from "../Atoms/Logout";
import { PropsWithChildren } from "react";
import { User } from "@/types";
import { usePage } from "@inertiajs/react";
import { LinkItem } from "@/Models/LinkItem";

export default function Navbar({ user }: PropsWithChildren<{ user: User }>) {
    const { url } = usePage();
    const navlinks: Array<LinkItem> = [
        { innerText: "Accueil", link: "/" },
        { innerText: "Les équipes", link: "/teams" },
    ];

    if (!user) {
        navlinks.push({ innerText: "Se connecter", link: "/login" });
    }

    return (
        <nav data-testid={"navbar"}>
            <ul className={"link-list"}>
                {navlinks.map((obj, key) => (
                    <li key={key}>
                        <Navlink
                            link={obj.link}
                            innerText={obj.innerText}
                            isActive={url === obj.link}
                        />
                    </li>
                ))}
                {user && (
                    <>
                        <li>
                            <Navlink
                                link={"/dashboard"}
                                innerText={"Dashboard"}
                                isActive={url === "/dashboard"}
                            />
                        </li>
                        <li>
                            <Logout />
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
