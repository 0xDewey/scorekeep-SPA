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
                    <section className={"main-paragraph"}>
                        <p>
                            Cette application est dédiée aux associations
                            sportives. Elle a été conçue pour répondre à vos
                            besoins en matière de suivi de matchs,
                            d'enregistrement et de gestion de la table des
                            matchs.
                        </p>
                        <p>
                            Il est possible pour les membres du bureau qui le
                            souhaitent d’avoir un compte afin de pouvoir se
                            connecter sur ce site. Une fois connecté, il vous
                            sera possible d’enregistrer de nouveaux matchs ainsi
                            que de consulter la liste des membres inscrits.
                        </p>
                        <p>
                            Une vérification peut-être ajoutée au moment de
                            l’inscription via l’adresse e-mail de la personne
                            souhaitant s’inscrire, afin de vérifier que cette
                            dernière dispose d’une licence. Toutefois, cette
                            vérification peut-être faite via un mot de passe
                            transmis par l'association.
                        </p>
                        <p>
                            Au delà de la gestion des tables de marques, cette
                            application permet aux familles / parents de savoir
                            quand un match est joué.
                        </p>
                        <p>
                            Une fonctionnalité a été ajoutée afin d'utiliser le
                            fichier de calendrier de match de la{" "}
                            <a href="https://www.ffhandball.fr/">FFHB</a> afin
                            de faciliter l'enregistrement ou la mise à jour des
                            matchs.
                        </p>
                    </section>
                    <HomePageCarousel />
                    <section className={"footer-paragraph"}>
                        <p>
                            Si toutefois vous souhaitez inscrire votre
                            association afin de bénéficier de cette application,
                            n’hésitez pas à me contacter.
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
