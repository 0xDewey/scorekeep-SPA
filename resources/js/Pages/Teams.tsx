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
                <article className="p-5 w-4/5 mx-auto flex flex-col bg-card rounded-2xl shadow-custom">
                    <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        Les équipes
                    </h1>
                    <section
                        className={
                            "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        }
                    >
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
