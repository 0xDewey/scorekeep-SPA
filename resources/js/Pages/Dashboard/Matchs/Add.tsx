import React, { ChangeEvent, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import { Switch } from "@/Components/Atoms/Switch";
import { Input } from "@/Components/Atoms/Input";
import { Head, Link, router, useForm } from "@inertiajs/react";
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
        gameDate: moment().toDate(),
        isHomeMatch: true,
        CPO: "",
        address: "",
        city: "",
        visitorTeamName: "",
        category: "",
    });

    useEffect(() => {
        if (recentlySuccessful) {
            setTimeout(() => {
                router.get(route("dashboard.matchs.index"));
            }, 1000);
        }
    }, [recentlySuccessful]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("dashboard.match.store"));
    };

    return (
        <>
            <Head title="Ajouter un match" />
            <Layout user={auth.user}>
                <article className="min-h-[60vh] my-5 w-11/12 mx-auto text-center bg-card rounded shadow-custom">
                    <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        Ajout d'un match
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Détails du match : </legend>
                            <Switch
                                colorOne={"#0240b7"}
                                colorTwo={"#c2c2c2"}
                                isOn={data.isHomeMatch}
                                handleToggle={(e: any) => {
                                    setData("isHomeMatch", e.target.checked);
                                }}
                                textOne={"A domicile"}
                                textTwo={"A l'extérieur"}
                            />
                            <div className={"flex flex-col w-4/5 mx-auto my-2"}>
                                <label htmlFor={"gameDate"}>
                                    Date du match:
                                </label>
                                <ReactDatePicker
                                    ariaLabelledBy={"gameDate"}
                                    name={"gameDate"}
                                    showTimeSelect
                                    minDate={new Date()}
                                    minTime={
                                        new Date(
                                            data.gameDate.getFullYear(),
                                            data.gameDate.getMonth(),
                                            data.gameDate.getDate(),
                                            8,
                                            30
                                        )
                                    }
                                    maxDate={
                                        new Date(
                                            data.gameDate.getFullYear() + 1,
                                            data.gameDate.getMonth(),
                                            data.gameDate.getDate(),
                                            22,
                                            0
                                        )
                                    }
                                    maxTime={
                                        new Date(
                                            data.gameDate.getFullYear() + 1,
                                            data.gameDate.getMonth(),
                                            data.gameDate.getDate(),
                                            22,
                                            0
                                        )
                                    }
                                    selected={data.gameDate}
                                    onChange={(e: any) => {
                                        setData("gameDate", moment(e).toDate());
                                    }}
                                    dateFormat="d MMMM yyyy à HH:mm"
                                    timeFormat="HH:mm"
                                />
                                <InputError
                                    className=""
                                    message={errors.gameDate}
                                />
                            </div>
                            <Input
                                onChange={(e) => {
                                    setData("visitorTeamName", e.target.value);
                                }}
                                type={"text"}
                                field={"Equipe adverse"}
                                value={data.visitorTeamName}
                            />
                            <InputError
                                className=""
                                message={errors.visitorTeamName}
                            />
                            <Input
                                onChange={(e) => {
                                    setData("category", e.target.value);
                                }}
                                type={"text"}
                                field={"Catégorie"}
                                value={data.category}
                            />
                            <InputError
                                className=""
                                message={errors.category}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Adresse du gymnase : </legend>
                            <Input
                                onChange={(e) => {
                                    setData("address", e.target.value);
                                }}
                                type={"text"}
                                field={"Adresse"}
                                value={data.address}
                            />
                            <InputError className="" message={errors.address} />
                            <Input
                                onChange={(e) => {
                                    setData("CPO", e.target.value);
                                }}
                                type={"text"}
                                field={"Code postal"}
                                maxLength={5}
                                value={data.CPO}
                            />
                            <InputError className="" message={errors.CPO} />
                            <Input
                                onChange={(e) => {
                                    setData("city", e.target.value);
                                }}
                                type={"text"}
                                field={"Ville"}
                                value={data.city}
                            />
                            <InputError className="" message={errors.city} />
                        </fieldset>

                        <div
                            className={
                                "flex flex-col w-4/5 mx-auto space-y-4 my-4"
                            }
                        >
                            <Transition
                                show={recentlySuccessful}
                                enter="leave"
                                enterFrom="leave-to"
                                leave="leave"
                                leaveTo="leave-to"
                            >
                                <p className="">Match créée.</p>
                            </Transition>
                            <Button
                                type="submit"
                                className="valid"
                                disabled={processing}
                            >
                                Ajouter le match
                            </Button>
                            <Link href={"/dashboard/matchs"}>
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
