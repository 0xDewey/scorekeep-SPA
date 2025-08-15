import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Match } from "@/Models/Match";
import { Input } from "@/Components/Atoms/Input";
import moment from "moment";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { FormEventHandler } from "react";
import { Button } from "@/Components/Atoms/Button";
import InputError from "@/Components/InputError";
import { Transition } from "@headlessui/react";

export default function UpdateMatch({
    auth,
    match,
}: PageProps<{
    match: Match;
}>) {
    const { data, setData, errors, put, processing, recentlySuccessful } =
        useForm({
            date: match.gameDate,
            address: match.address,
            CPO: match.CPO,
            city: match.city,
        });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        put(
            route("dashboard.match.edit", {
                uuid: match.uuid,
            })
        );
    };

    return (
        <>
            <Head title={match.visitorTeam.name} />
            <Layout user={auth.user}>
                <article className="min-h-[60vh] my-5 w-11/12 mx-auto text-center bg-card rounded-custom shadow-custom">
                    <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        Mise à jour du match <br /> {match.category} contre{" "}
                        {match.visitorTeam?.name}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className={"flex flex-col w-4/5 mx-auto my-2"}>
                            <label htmlFor={"gameDate"}>Date du match:</label>
                            <ReactDatePicker
                                ariaLabelledBy={"gameDate"}
                                name={"gameDate"}
                                showTimeSelect
                                minDate={moment().add(1, "days").toDate()}
                                minTime={new Date(0, 0, 0, 8, 30)}
                                maxTime={new Date(0, 0, 0, 22, 0)}
                                selected={moment(data.date).toDate()}
                                onChange={(e) => setData("date", e)}
                                dateFormat="d MMMM yyyy à HH:mm"
                                locale={"fr"}
                                timeFormat="HH:mm"
                            />
                        </div>
                        <div>
                            <Input
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
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
                        </div>

                        <Transition
                            show={recentlySuccessful}
                            enter="leave"
                            enterFrom="leave-to"
                            leave="leave"
                            leaveTo="leave-to"
                        >
                            <p className="">Mis à jour avec succès.</p>
                        </Transition>
                        <div
                            className={
                                "flex flex-col w-4/5 mx-auto space-y-4 my-4"
                            }
                        >
                            <Button
                                className="valid"
                                type="submit"
                                disabled={processing}
                                onClick={handleSubmit}
                            >
                                Mettre à jour le match
                            </Button>
                            <Link href={"/dashboard/matchs"}>
                                <Button
                                    type="button"
                                    variant={"default"}
                                    className={"bg-gray-200 hover:bg-gray-300"}
                                >
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
