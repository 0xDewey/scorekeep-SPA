import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { User } from "@/types";
import Header from "@/Components/Organisms/Header";
import Footer from "@/Components/Organisms/Footer";
import BurgerMenu from "@/Components/Organisms/BurgerMenu";
import { LinkItem } from "@/Models/LinkItem";

export default function Layout({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navlinks: Array<LinkItem> = [
        { innerText: "Accueil", link: "/" },
        { innerText: "Les équipes", link: "/teams" },
    ];

    if (!user) {
        navlinks.push({ innerText: "Se connecter", link: "/login" });
    } else {
        navlinks.push({ innerText: "Dashboard", link: "/dashboard" });
        navlinks.push({ innerText: "Se déconnecter", link: "/logout" });
    }

    return (
        <div className="page">
            <div id="slide">
                <BurgerMenu
                    isOpen={menuOpen}
                    scrolling={scrolling}
                    navlinks={navlinks}
                    toggleMenu={toogleMenu}
                />
            </div>
            <Header user={user} scrolling={scrolling} />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
}
