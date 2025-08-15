import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import { LinkItem } from "@/Models/LinkItem";

interface BurgerMenuProps {
    navlinks: LinkItem[];
    isOpen: boolean;
    toggleMenu: () => void;
    scrolling: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
    navlinks,
    isOpen,
    toggleMenu,
    scrolling,
}) => {
    return (
        <>
            <button
                className={`text-3xl p-2 rounded-md focus:outline-none md:hidden ${
                    scrolling ? "text-primary" : "text-text"
                }`}
                onClick={toggleMenu}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-card z-50 transform transition-transform md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <nav className="p-4">
                    <ul className="space-y-3">
                        {navlinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    className="text-xl block"
                                    href={link.link}
                                    onClick={toggleMenu}
                                >
                                    {link.innerText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default BurgerMenu;
