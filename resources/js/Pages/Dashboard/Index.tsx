import { DashboardLink } from "@/Components/Molecules/DashboardLink";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";
import {
    faCalendar,
    faUserPlus,
    faUsers,
    faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import UpdateRegistrationPasswordModal from "@/Components/Organisms/UpdateRegistrationPasswordModal";

interface DashboardLinks {
    innerText: string;
    link: string;
    icon: React.ReactNode;
}

const Dashboard = ({
    auth,
    roles,
    password,
}: PageProps<{ roles: Array<string>; password: string }>) => {
    const isSA = roles.includes("SA");

    let dashboardLinks: Array<DashboardLinks> = [
        {
            innerText: "Profil",
            link: "/profile",
            icon: <FontAwesomeIcon icon={faUserAlt} />,
        },
        {
            innerText: "Gestion des Matchs",
            link: "/dashboard/matchs",
            icon: <FontAwesomeIcon icon={faVolleyball} />,
        },
        {
            innerText: "Gestion des bénévoles",
            link: "/dashboard/volunteers",
            icon: <FontAwesomeIcon icon={faCalendar} />,
        },
    ];

    if (isSA) {
        dashboardLinks = [
            {
                innerText: "Profil",
                link: "/profile",
                icon: <FontAwesomeIcon icon={faUserAlt} />,
            },
            {
                innerText: "Ajouter des utilisateurs",
                link: "dashboard/user/add",
                icon: <FontAwesomeIcon icon={faUserPlus} />,
            },
            {
                innerText: "Ajouter des équipes",
                link: "dashboard/local_teams/add",
                icon: <FontAwesomeIcon icon={faUsers} />,
            },
        ];
    }

    return (
        <>
            <Head title="Dashboard" />
            <Layout user={auth.user}>
                <section className="dashboard">
                    <div>
                        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                            Panneau d'administration
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-stretch">
                        {dashboardLinks.map((obj, key) => (
                            <DashboardLink
                                key={key}
                                link={obj.link}
                                innerText={obj.innerText}
                            >
                                <div className="flex flex-col text-center">
                                    <p className="text-2xl m-0">{obj.icon}</p>
                                    <p>{obj.innerText}</p>
                                </div>
                            </DashboardLink>
                        ))}
                        {!isSA && (
                            <UpdateRegistrationPasswordModal
                                password={password}
                            />
                        )}
                    </div>
                </section>
            </Layout>
        </>
    );
};
export default Dashboard;
