import { Link } from "@inertiajs/react";

export const Logout = () => {
    return (
        <Link
            about="Lien de navigation pour se déconnecter"
            className={`text-md px-3 py-2 rounded-md text-text hover:text-primary transition-colors duration-200`}
            href={"/logout"}
        >
            Se déconnecter
        </Link>
    );
};
