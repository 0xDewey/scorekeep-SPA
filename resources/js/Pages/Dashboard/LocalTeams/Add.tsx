import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/Components/Atoms/Input";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { Button } from "@/Components/Atoms/Button";
import InputError from "@/Components/InputError";
import { Transition } from "@headlessui/react";

export default function AddMatch({ auth }: PageProps<{}>) {
    const {
        data,
        setData,
        errors,
        post,
        processing,
        recentlySuccessful,
        reset,
    } = useForm({
        name: "",
        ffhName: "",
        logo: "",
        token: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("dashboard.local_teams.create"));
    };

    return (
        <>
            <Head title="Ajouter une équipe" />
            <Layout user={auth.user}>
                <article className={"add-user"}>
                    <h2>Ajout d'une équipe</h2>
                    <form onSubmit={handleSubmit}>
                        <Input
                            onChange={(e) => {
                                setData("name", e.target.value);
                            }}
                            type={"text"}
                            field={"Nom"}
                            value={data.name}
                        />
                        <InputError className="" message={errors.name} />
                        <Input
                            onChange={(e) => {
                                setData("ffhName", e.target.value);
                            }}
                            type={"text"}
                            field={"Nom chez la FFH"}
                            value={data.ffhName}
                        />
                        <InputError className="" message={errors.ffhName} />
                        <Input
                            onChange={(e) => {
                                setData("logo", e.target.value);
                            }}
                            type={"text"}
                            field={"Logo"}
                            value={data.logo}
                        />
                        <InputError className="" message={errors.logo} />
                        <Input
                            onChange={(e) => {
                                setData("token", e.target.value);
                            }}
                            type={"text"}
                            field={"Mot de passe pour les bénévoles"}
                            value={data.token}
                        />
                        <InputError className="" message={errors.token} />

                        <div className={"btn-form space-y-4"}>
                            <Transition
                                show={recentlySuccessful}
                                enter="leave"
                                enterFrom="leave-to"
                                leave="leave"
                                leaveTo="leave-to"
                            >
                                <p className="">Equipe créée.</p>
                            </Transition>
                            <Button
                                type="submit"
                                className="valid"
                                disabled={processing}
                            >
                                Créer l'équipe
                            </Button>
                            <Link href={"/dashboard"}>
                                <Button className="error" type="button">
                                    Retour
                                </Button>
                            </Link>
                        </div>
                    </form>
                </article>
            </Layout>
        </>
    );
}
