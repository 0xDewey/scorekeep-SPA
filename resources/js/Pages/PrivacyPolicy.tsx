import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const PrivacyPolicy = ({ auth }: PageProps) => {
    return (
        <Layout user={auth.user}>
            <Head title="Politique de Confidentialité" />
            <article className="home-content">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Politique de Confidentialité
                </h1>
                <p className="text-gray-600 mb-4">
                    Cette politique de confidentialité décrit la manière dont
                    nous recueillons, utilisons et partageons les informations
                    personnelles des utilisateurs de notre site web hébergé sur
                    o2switch. Nous nous engageons à protéger votre vie privée et
                    vos données personnelles.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Collecte d'Informations
                </h2>
                <p className="text-gray-600 mb-4">
                    Nous recueillons les informations que vous fournissez
                    volontairement lorsque vous remplissez des formulaires sur
                    notre site, comme votre nom, adresse e-mail, et autres
                    détails pertinents. Nous n'utilisons pas de cookies hormis
                    ceux nécessaire au bon fonctionnement du site.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Utilisation des Données
                </h2>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Partage des Données
                </h2>
                <p className="text-gray-600 mb-4">
                    Nous ne partageons pas vos informations personnelles avec
                    des tiers, sauf si cela est nécessaire pour fournir nos
                    services ou si nous sommes légalement tenus de le faire.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Sécurité des Données
                </h2>
                <p className="text-gray-600 mb-4">
                    Nous mettons en œuvre des mesures de sécurité pour protéger
                    vos données personnelles. Cependant, aucune méthode de
                    transmission sur Internet ou de stockage électronique n'est
                    totalement sécurisée. Nous ne pouvons garantir une sécurité
                    absolue.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Vos Droits
                </h2>
                <p className="text-gray-600 mb-4">
                    Conformément à la réglementation applicable, vous disposez
                    de droits concernant vos données personnelles, notamment le
                    droit d'accéder à vos données, de les corriger ou de
                    demander leur suppression. Pour exercer ces droits, veuillez
                    nous contacter.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Modifications de cette Politique
                </h2>
                <p className="text-gray-600 mb-4">
                    Nous nous réservons le droit de modifier cette politique de
                    confidentialité à tout moment. Toute modification sera
                    affichée sur cette page avec une date de mise à jour.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
                    Contact
                </h2>
                <p className="text-gray-600 mb-4">
                    Si vous avez des questions concernant cette politique de
                    confidentialité, veuillez nous contacter à l'adresse
                    suivante : contact@scorekeep.org.
                </p>

                <p className="text-gray-500 text-sm mt-6">
                    Dernière mise à jour : 11 octobre 2024
                </p>
            </article>
        </Layout>
    );
};

export default PrivacyPolicy;
