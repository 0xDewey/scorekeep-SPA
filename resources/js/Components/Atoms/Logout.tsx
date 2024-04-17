import { Link } from "@inertiajs/react";

export const Logout = () => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link
            about="Lien de navigation pour se déconnecter"
            className={`navlink`}
            href={route("logout")}
        >
            Se déconnecter
        </Link>
    );
};
