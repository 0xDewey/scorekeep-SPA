import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import HomePageCarousel from "@/Components/Organisms/HomePageCarousel";

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <>
            <Head title="Bienvenue" />
            <Layout user={auth.user}>
                <article className="p-5 w-4/5 mx-auto flex flex-col bg-card rounded-2xl shadow-custom">
                    <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        Suivez, enregistrez et gérez vos Matchs avec Scorekeep
                    </h1>
                    <HomePageCarousel />
                    <section className="space-y-5">
                        <p className="text-text">
                            Cette application est dédiée aux associations
                            sportives. Elle a été conçue pour répondre à vos
                            besoins en matière de suivi de matchs,
                            d'enregistrement et de gestion de la table des
                            matchs.
                        </p>
                        <p className="text-text">
                            Une fois que votre club est inscrit, vous pouvez
                            enregistrer les prochains matchs afin de permettre à
                            vos bénévoles de s'incrire au différent poste.
                        </p>
                        <p className="text-text">
                            Afin de valider et sécuriser les inscriptions en
                            tant que bénévoles un mot de passe définit par vos
                            soins sera a transmettre à vos bénévoles.
                        </p>
                        <p className="text-text">
                            Enfin, vous avez la main pour sélectionner et
                            transmettre la liste des bénévoles pour le week-end
                            de matchs à venir.
                        </p>
                        <p className="text-text">
                            Au delà de la gestion des tables de marques, cette
                            application permet aux familles / parents de savoir
                            quels sont les matchs de la semaine.
                        </p>
                        <p className="text-text">
                            Une fonctionnalité a été ajoutée afin d'utiliser le
                            fichier de calendrier de match de la{" "}
                            <a
                                className="text-primary font-bold hover:underline"
                                href="https://www.ffhandball.fr/"
                                target="_blank"
                            >
                                FFHB
                            </a>{" "}
                            afin de faciliter l'enregistrement ou la mise à jour
                            des matchs.
                        </p>
                    </section>
                    <section className={`footer-paragraph`}>
                        <p>
                            Pour toutes demandes d'informations n'hésitez pas à
                            me contacter.
                        </p>

                        <a
                            href={"mailto:contact@scorekeep.org"}
                            about={"Me contacter par e-mail"}
                        >
                            contact@scorekeep.org
                        </a>
                        <p>DoWeDev</p>
                    </section>
                </article>
            </Layout>
        </>
    );
}
