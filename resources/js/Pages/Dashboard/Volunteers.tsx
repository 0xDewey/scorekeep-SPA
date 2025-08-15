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
                <article className={"volunteers"}>
                    <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        Bénévoles de la semaine
                    </h1>

                    <table>
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
                    <Pagination links={matchs.meta.links} />
                </article>
            </Layout>
        </>
    );
}
