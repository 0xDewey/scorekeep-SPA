import Navbar from "../Molecules/Navbar";
import { PropsWithChildren } from "react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";

export default function Header({
    user,
    scrolling,
}: PropsWithChildren<{ user: User; scrolling: boolean }>) {
    return (
        <header
            className={`app-header ${scrolling ? "app-header--scrolling" : ""}`}
        >
            <div className={"app-title"}>
                <h1 className="text-xl">Scorekeep</h1>
            </div>
            <div className="logo-app hidden-xs">
                <Link href="/">
                    <img
                        src={"/logo192.png"}
                        alt={"Logo de l'application Scorekeep"}
                        width={80}
                        height={80}
                    />
                </Link>
            </div>
            <div className={`links ${scrolling ? "links--scrolling" : ""}`}>
                <Navbar user={user} />
            </div>
        </header>
    );
}
