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
            <div
                className={`burger-icon  ${
                    scrolling ? "burger-icon--scrolling" : ""
                } text-3xl`}
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
            <div className={`menu ${isOpen ? "open" : "closed"}`}>
                <ul>
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-xl"
                                href={link.link}
                                onClick={toggleMenu}
                            >
                                {link.innerText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default BurgerMenu;
