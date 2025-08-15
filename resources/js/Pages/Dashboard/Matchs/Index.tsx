import moment from "moment";
import { Match } from "@/interfaces/Match";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Head, Link, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import Pagination from "@/Components/Organisms/Pagination";
import { MatchResponse } from "@/Models/PaginationMeta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCancel,
    faCheck,
    faPen,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/Components/Atoms/Button";
import ICSUploadButton from "@/Components/Organisms/ICSUploadButton";

export default function DashboardMatchs({
    auth,
    endDate,
    startDate,
    matchs,
}: PageProps<{
    endDate: any;
    startDate: any;
    matchs: MatchResponse;
}>) {
    const [initialStartDate, setStartDate] = useState(
        moment(startDate, "YYYY-MM-DD")
    );
    const [initialEndDate, setEndDate] = useState(
        moment(endDate, "YYYY-MM-DD")
    );

    const handleFilter = () => {
        router.get(
            route("dashboard.matchs.index", {
                start_date: initialStartDate.format("YYYY-MM-DD"),
                end_date: initialEndDate.format("YYYY-MM-DD"),
                page: matchs.meta.current_page,
            })
        );
    };

    return (
        <>
            <Head title="Dashboard - Les matchs" />
            <Layout user={auth.user}>
                <article className="min-h-[60vh] my-5 w-11/12 mx-auto text-center bg-card rounded-custom shadow-custom">
                    <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        Matchs Dashboard
                    </h1>
                    <section className="filter-section">
                        <div
                            className={
                                "flex flex-col sm:flex-row sm:items-center gap-4 my-7"
                            }
                        >
                            <div className={"flex flex-col w-full sm:w-1/3"}>
                                <label htmlFor="startDate">
                                    Date de début:
                                </label>
                                <DatePicker
                                    selected={initialStartDate.toDate()}
                                    onChange={(date) =>
                                        setStartDate(moment(date))
                                    }
                                    maxDate={initialEndDate.toDate()}
                                    dateFormat="yyyy-MM-dd"
                                    locale={"fr"}
                                />
                            </div>
                            <div className={"flex flex-col w-full sm:w-1/3"}>
                                <label htmlFor="endDate">Date de fin:</label>
                                <DatePicker
                                    selected={initialEndDate.toDate()}
                                    onChange={(date) =>
                                        setEndDate(moment(date))
                                    }
                                    minDate={initialStartDate.toDate()}
                                    dateFormat="yyyy-MM-dd"
                                    locale={"fr"}
                                />
                            </div>
                            <div className="flex justify-end w-full">
                                <Button
                                    className="valid"
                                    onClick={handleFilter}
                                >
                                    Filtrer
                                </Button>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="flex items-center justify-between w-11/12 mx-auto">
                            <Link href="/dashboard/matchs/add">
                                <Button type="button" className="valid">
                                    Ajouter un match
                                </Button>
                            </Link>
                            <ICSUploadButton />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date du match</th>
                                    <th className={"hidden sm:table-cell"}>
                                        Contre
                                    </th>
                                    <th>Catégorie</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchs.data.map((match: Match) => (
                                    <tr key={match.uuid}>
                                        <td>
                                            {moment(match.gameDate).format(
                                                "DD/MM/YYYY HH:mm"
                                            )}
                                        </td>
                                        <td className={"hidden sm:table-cell"}>
                                            {match.visitorTeam.name}
                                        </td>
                                        <td>{match.category}</td>
                                        <td>
                                            <div
                                                className={
                                                    "flex items-center space-x-2"
                                                }
                                            >
                                                {!match.isCancelled ? (
                                                    <>
                                                        <Link
                                                            href={`/dashboard/matchs/${match.uuid}`}
                                                            as="div"
                                                        >
                                                            <Button
                                                                className="valid"
                                                                type="submit"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faPen}
                                                                />
                                                            </Button>
                                                        </Link>
                                                        <Link
                                                            href={`/dashboard/matchs/cancel/${match.uuid}`}
                                                            about={
                                                                "Annuler le match contre " +
                                                                match
                                                                    .visitorTeam
                                                                    .name
                                                            }
                                                            method="put"
                                                            as="div"
                                                            preserveScroll={
                                                                true
                                                            }
                                                        >
                                                            <Button
                                                                type="button"
                                                                className="error"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faCancel
                                                                    }
                                                                />
                                                            </Button>
                                                        </Link>
                                                        <Link
                                                            href={`/dashboard/matchs/${match.uuid}`}
                                                            about={
                                                                "Supprimer le match contre " +
                                                                match
                                                                    .visitorTeam
                                                                    .name
                                                            }
                                                            method="delete"
                                                            as="div"
                                                            preserveScroll={
                                                                true
                                                            }
                                                        >
                                                            <Button
                                                                type="button"
                                                                className="danger"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faTrash
                                                                    }
                                                                />
                                                            </Button>
                                                        </Link>
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={`/dashboard/matchs/confirm/${match.uuid}`}
                                                        about={
                                                            "Reconfirmer le match contre " +
                                                            match.visitorTeam
                                                                .name
                                                        }
                                                        method="put"
                                                        as="div"
                                                        preserveScroll={true}
                                                    >
                                                        <Button
                                                            type="button"
                                                            className="valid"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faCheck}
                                                            />
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination links={matchs.meta.links} />
                    </section>
                </article>
            </Layout>
        </>
    );
}
