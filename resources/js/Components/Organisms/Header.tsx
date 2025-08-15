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
            className={`w-full bg-transparent transition-shadow duration-300 ${
                scrolling ? "backdrop-blur-sm bg-white/60 shadow-sm" : ""
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
                <div className="flex items-center gap-4">
                    <div className="text-xl font-bold">Scorekeep</div>
                    <div className="hidden sm:block">
                        <Link href="/">
                            <img
                                src={"/logo192.png"}
                                alt={"Logo de l'application Scorekeep"}
                                width={56}
                                height={56}
                                className="rounded"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex justify-end">
                    <Navbar user={user} />
                </div>
            </div>
        </header>
    );
}
