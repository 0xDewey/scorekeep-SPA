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
    const { data, setData, errors, patch, processing, recentlySuccessful } =
        useForm({
            date: match.gameDate,
            address: match.address,
            CPO: match.CPO,
            city: match.city,
        });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(
            route("dashboard.match.edit", {
                uuid: match.uuid,
            })
        );
    };

    return (
        <>
            <Head title={match.visitorTeam.name} />
            <Layout user={auth.user}>
                <article className={"update-match"}>
                    <h2>
                        Mise à jour du match <br /> {match.category} contre{" "}
                        {match.visitorTeam?.name}
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className={"datepicker"}>
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
                        <div className={"btn-form space-y-4"}>
                            <Button
                                className="valid"
                                type="submit"
                                disabled={processing}
                                onClick={handleSubmit}
                            >
                                Mettre à jour le match
                            </Button>
                            <Link href={"/dashboard/matchs"}>
                                <Button type="button" className="cancel-btn">
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
