import TeamCard from "@/Components/Atoms/TeamCard";
import Layout from "@/Layouts/Layout";
import { LocalTeam } from "@/interfaces/LocalTeam";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Teams({
    auth,
    teams,
}: PageProps<{ teams: Array<LocalTeam> }>) {
    return (
        <>
            <Head title="Les équipes" />
            <Layout user={auth.user}>
                <article className="teams-content">
                    <h2>Les équipes</h2>
                    <section className={"teams-display"}>
                        {teams.map((localTeam: LocalTeam) => (
                            <TeamCard
                                key={localTeam.uuid}
                                link={`/matchs/${localTeam.uuid}`}
                                teamName={localTeam.name}
                                logoPath={localTeam.logo}
                            />
                        ))}
                    </section>
                </article>
            </Layout>
        </>
    );
}
