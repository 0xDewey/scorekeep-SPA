import VolunteerSelection from "@/Components/Organisms/VolunteerSelection";
import { Match } from "@/Models/Match";
import { PageProps } from "@/types";
import { MatchResponse } from "@/Models/PaginationMeta";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Pagination from "@/Components/Organisms/Pagination";

export default function Volunteers({
    auth,
    endDate,
    startDate,
    matchs,
}: PageProps<{
    endDate: string;
    startDate: string;
    matchs: MatchResponse;
}>) {
    return (
        <>
            <Head title="Dashboard - Les matchs" />
            <Layout user={auth.user}>
                <article
                    className={
                        "my-6 w-11/12 mx-auto bg-card rounded shadow-custom p-6"
                    }
                >
                    <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        Bénévoles de la semaine
                    </h1>

                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Chronométreurs</th>
                                    <th>Secrétaires</th>
                                    <th>Responsable de salle</th>
                                    <th>Buvette</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchs.data.map((match: Match) => (
                                    <VolunteerSelection
                                        key={match.uuid}
                                        match={match}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination links={matchs.meta.links} />
                </article>
            </Layout>
        </>
    );
}
