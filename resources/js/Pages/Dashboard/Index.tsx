import { DashboardLink } from "@/Components/Molecules/DashboardLink";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";
import { faCalendar, faVolleyball } from "@fortawesome/free-solid-svg-icons";

interface DashboardLinks {
    innerText: string;
    link: string;
    icon: React.ReactNode;
}

const Dashboard = ({ auth }: PageProps<{}>) => {
    const dashboardLinks: Array<DashboardLinks> = [
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

    return (
        <>
            <Head title="Dashboard" />
            <Layout user={auth.user}>
                <section className="dashboard">
                    <div>
                        <h2>Panneau d'administration</h2>
                    </div>
                    <div className="dashboard-links">
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
                    </div>
                </section>
            </Layout>
        </>
    );
};
export default Dashboard;
