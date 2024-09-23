import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import HomePageCarousel from "@/Components/Organisms/HomePageCarousel";

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <>
            <Head title="Bienvenue" />
            <Layout user={auth.user}>
                <article className="home-content">
                    <h2>
                        Suivez, enregistrez et gérez vos Matchs avec Scorekeep
                    </h2>
                    <HomePageCarousel />
                    <section className={"main-paragraph"}>
                        <p>
                            Cette application est dédiée aux associations
                            sportives. Elle a été conçue pour répondre à vos
                            besoins en matière de suivi de matchs,
                            d'enregistrement et de gestion de la table des
                            matchs.
                        </p>
                        <p>
                            Une fois que votre club est inscrit, vous pouvez
                            enregistrer les prochains matchs afin de permettre à
                            vos bénévoles de s'incrire au différent poste.
                        </p>
                        <p>
                            Afin de valider et sécuriser les inscriptions en
                            tant que bénévoles un mot de passe définit par vos
                            soins sera a transmettre à vos bénévoles.
                        </p>
                        <p>
                            Enfin, vous avez la main pour sélectionner et
                            transmettre la liste des bénévoles pour le week-end
                            de matchs à venir.
                        </p>
                        <p>
                            Au delà de la gestion des tables de marques, cette
                            application permet aux familles / parents de savoir
                            quels sont les matchs de la semaine.
                        </p>
                        <p>
                            Une fonctionnalité a été ajoutée afin d'utiliser le
                            fichier de calendrier de match de la{" "}
                            <a
                                className="ffhb-link"
                                href="https://www.ffhandball.fr/"
                                target="_blank"
                            >
                                FFHB
                            </a>{" "}
                            afin de faciliter l'enregistrement ou la mise à jour
                            des matchs.
                        </p>
                    </section>
                    <section className={"footer-paragraph"}>
                        <p>
                            Pour toutes demandes d'informations n'hésitez pas à
                            me contacter.
                        </p>
                        <Link
                            href={"mailto:contact@scorekeep.org"}
                            about={"Me contacter par e-mail"}
                        >
                            contact@scorekeep.org
                        </Link>
                        <p>DoWeDev</p>
                    </section>
                </article>
            </Layout>
        </>
    );
}
