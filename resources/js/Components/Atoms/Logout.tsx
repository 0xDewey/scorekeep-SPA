import { Link } from "@inertiajs/react";

export const Logout = () => {
    return (
        <Link
            about="Lien de navigation pour se déconnecter"
            className={`navlink`}
            href={"/logout"}
        >
            Se déconnecter
        </Link>
    );
};
