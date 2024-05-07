import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/Components/Atoms/Input";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { Button } from "@/Components/Atoms/Button";
import InputError from "@/Components/InputError";
import { Transition } from "@headlessui/react";
import Select from "@/Components/Atoms/Select";
import SelectOptionsProps from "@/Models/SelectOptionsProps";

export default function AddMatch({
    auth,
    roles,
    localTeams,
}: PageProps<{
    roles: Array<SelectOptionsProps>;
    localTeams: Array<SelectOptionsProps>;
}>) {
    const { data, setData, errors, post, processing, recentlySuccessful } =
        useForm({
            name: "",
            local_team: "",
            role: "",
            password: "",
            email: "",
        });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("dashboard.user.create"));
    };

    return (
        <>
            <Head title="Ajouter un utilisateur" />
            <Layout user={auth.user}>
                <article className={"add-user"}>
                    <h2>Ajout d'un utilisateur</h2>
                    <form onSubmit={handleSubmit}>
                        <Select
                            value={data.local_team}
                            onChange={(e) =>
                                setData("local_team", e.target.value)
                            }
                            selectOptions={localTeams}
                            innerText="Sélectionnez l'équipe"
                        />
                        <InputError className="" message={errors.local_team} />

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
                                setData("email", e.target.value);
                            }}
                            type={"email"}
                            field={"Email"}
                            value={data.email}
                        />
                        <InputError className="" message={errors.email} />
                        <Input
                            onChange={(e) => {
                                setData("password", e.target.value);
                            }}
                            type={"text"}
                            field={"Mot de passe provisoire"}
                            value={data.password}
                        />
                        <InputError className="" message={errors.password} />
                        <Select
                            value={data.role}
                            onChange={(e) => setData("role", e.target.value)}
                            selectOptions={roles}
                            innerText="Séléctionnez le rôle"
                        />
                        <InputError className="" message={errors.role} />
                        <div className={"btn-form space-y-4"}>
                            <Transition
                                show={recentlySuccessful}
                                enter="leave"
                                enterFrom="leave-to"
                                leave="leave"
                                leaveTo="leave-to"
                            >
                                <p className="">Utilisateur créée.</p>
                            </Transition>

                            <Button
                                type="submit"
                                className="valid"
                                disabled={processing}
                            >
                                Créer l'utilisateur
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
