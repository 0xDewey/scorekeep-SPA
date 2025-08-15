import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const TermsOfService = ({ auth }: PageProps) => {
    return (
        <Layout user={auth.user}>
            <Head title="Conditions Générales d'Utilisation" />
            <article className="p-5 w-4/5 mx-auto flex flex-col bg-card rounded-2xl shadow-custom">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Conditions Générales d'Utilisation
                </h1>
                <p className="text-gray-600 mb-4">
                    Les présentes Conditions Générales d'Utilisation (CGU)
                    régissent votre utilisation de l'application Scorekeep,
                    conçue pour permettre aux associations de sport indoor de
                    gérer les inscriptions des bénévoles aux tables de match.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Acceptation des Conditions
                </h2>
                <p className="text-gray-600 mb-4">
                    En accédant à Scorekeep et en l'utilisant, vous acceptez
                    d'être lié par ces CGU. Si vous n'acceptez pas ces
                    conditions, vous ne devez pas utiliser l'application.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Inscription et Compte Utilisateur
                </h2>
                <p className="text-gray-600">
                    Pour utiliser Scorekeep en tant que bénévole, vous n'avez
                    pas besoin de créer un compte. Vous pouvez accéder à
                    l'inscription pour les tables de match en utilisant le code
                    transmis par votre club.
                </p>
                <p className="text-gray-600 mb-4">
                    Les utilisateurs disposant d'un compte doivent fournir des
                    informations exactes et à jour et sont responsables de la
                    confidentialité de leur mot de passe ainsi que des activités
                    réalisées sur leur compte.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Utilisation de l'Application
                </h2>
                <p className="text-gray-600 mb-4">
                    Scorekeep permet aux utilisateurs de consulter les listes de
                    matchs et de s'inscrire pour participer en tant que
                    bénévoles. Toute utilisation abusive de la plateforme, telle
                    que l'inscription sans intention de participation, est
                    strictement interdite.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Droits et Obligations des Utilisateurs
                </h2>
                <p className="text-gray-600 mb-4">
                    En utilisant Scorekeep, vous vous engagez à respecter les
                    règles de conduite et à utiliser l'application de manière
                    conforme aux lois en vigueur. Vous devez être autorisé par
                    l'association à vous inscrire comme bénévole pour les matchs
                    proposés.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Responsabilités de Scorekeep
                </h2>
                <p className="text-gray-600 mb-4">
                    Scorekeep s'efforce de maintenir le service disponible en
                    permanence, mais ne garantit pas l'absence de bugs,
                    d'interruptions ou d'erreurs. Scorekeep ne pourra être tenu
                    responsable en cas de perte de données ou de
                    non-disponibilité temporaire du service.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Confidentialité et Protection des Données
                </h2>
                <p className="text-gray-600 mb-4">
                    Scorekeep s'engage à protéger les données personnelles des
                    utilisateurs. Veuillez consulter notre{" "}
                    <a href="/privacy-policy" className="text-blue-500">
                        Politique de Confidentialité
                    </a>{" "}
                    pour plus de détails.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Modification des CGU
                </h2>
                <p className="text-gray-600 mb-4">
                    Scorekeep se réserve le droit de modifier ces CGU à tout
                    moment. Les utilisateurs seront informés de toute
                    modification par une notification ou un affichage sur
                    l'application.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Résiliation
                </h2>
                <p className="text-gray-600 mb-4">
                    Scorekeep se réserve le droit de suspendre ou de résilier
                    l'accès à l'application pour tout utilisateur en cas de
                    non-respect des CGU ou de comportement inapproprié.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Contact
                </h2>
                <p className="text-gray-600 mb-4">
                    Pour toute question concernant ces CGU, veuillez nous
                    contacter à l'adresse suivante : contact@scorekeep.org.
                </p>

                <p className="text-gray-500 text-sm mt-6">
                    Dernière mise à jour : 11 octobre 2024
                </p>
            </article>
        </Layout>
    );
};

export default TermsOfService;
