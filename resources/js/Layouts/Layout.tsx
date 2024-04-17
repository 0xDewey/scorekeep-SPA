import { useState, PropsWithChildren, ReactNode, useEffect } from "react";
import { Link, router } from "@inertiajs/react";
import { User } from "@/types";
import { slide as Menu, State } from "react-burger-menu";
import Header from "@/Components/Organisms/Header";
import Footer from "@/Components/Organisms/Footer";
import { NavlinkObject } from "@/Models/NavlinkObject";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state: State) => {
        setMenuOpen(state.isOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        router.get("/logout");
    };

    useEffect(() => {
        const handleRouteChange = () => {
            closeMenu();
        };

        router.on("start", handleRouteChange);
    }, [router]);

    const navlinks: Array<NavlinkObject> = [
        { innerText: "Accueil", link: "/" },
        { innerText: "Les équipes", link: "/teams" },
    ];

    if (!user) {
        navlinks.push({ innerText: "Se connecter", link: "/login" });
    }

    return (
        <div className="page">
            <div id="slide">
                <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
                    {navlinks.map((obj, key) => (
                        <Link key={key} href={obj.link}>
                            {obj.innerText}
                        </Link>
                    ))}
                    {user && <Link href="/dashboard">Dashboard</Link>}
                    {user && (
                        <Link href="#" onClick={handleLogout}>
                            Se déconnecter
                        </Link>
                    )}
                </Menu>
            </div>
            <Header user={user} />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
}
