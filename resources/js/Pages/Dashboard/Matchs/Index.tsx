import moment from "moment";
import { Match } from "@/interfaces/Match";
import { useEffect, useState } from "react";
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

export default function DashboardMatchs({
    auth,
    endDate,
    startDate,
    matchs,
}: PageProps<{
    endDate: string;
    startDate: string;
    matchs: MatchResponse;
}>) {
    const [initialStartDate, setStartDate] = useState(moment(startDate));
    const [initialEndDate, setEndDate] = useState(moment(endDate));

    useEffect(() => {
        router.replace(
            route("dashboard.matchs.index", {
                end_date: initialEndDate.format("YYYY-MM-DD"),
                start_date: initialStartDate.format("YYYY-MM-DD"),
                page: matchs.meta.current_page,
            })
        );
    }, [initialStartDate, initialEndDate]);

    return (
        <>
            <Head title="Dashboard - Les matchs" />
            <Layout user={auth.user}>
                <article className="dashboard-matchs">
                    <h1>Matchs Dashboard</h1>
                    <section className="filter-section">
                        <div className={"date-filters"}>
                            <div className="date-filter">
                                <label htmlFor="startDate">
                                    Date de début:
                                </label>
                                <DatePicker
                                    selected={moment(
                                        startDate,
                                        "YYYY-MM-DD"
                                    ).toDate()}
                                    onChange={(date) =>
                                        setStartDate(moment(date))
                                    }
                                    maxDate={moment(endDate).toDate()}
                                    dateFormat="yyyy-MM-dd"
                                    locale={"fr"}
                                />
                            </div>
                            <div className="date-filter">
                                <label htmlFor="endDate">Date de fin:</label>
                                <DatePicker
                                    selected={moment(
                                        endDate,
                                        "YYYY-MM-DD"
                                    ).toDate()}
                                    onChange={(date) =>
                                        setEndDate(moment(date))
                                    }
                                    dateFormat="yyyy-MM-dd"
                                    locale={"fr"}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="add-match-button">
                            <Link href="/dashboard/matchs/add">
                                <Button type="button" className="valid">
                                    Ajouter un match
                                </Button>
                            </Link>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date du match</th>
                                    <th className={"hidden-s"}>Contre</th>
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
                                        <td className={"hidden-s"}>
                                            {match.visitorTeam.name}
                                        </td>
                                        <td>{match.category}</td>
                                        <td>
                                            <div className={"action-buttons"}>
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
                                                                "Annuler le match contre" +
                                                                match
                                                                    .visitorTeam
                                                                    .name
                                                            }
                                                            method="patch"
                                                            as="div"
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
                                                                "Supprimer le match contre" +
                                                                match
                                                                    .visitorTeam
                                                                    .name
                                                            }
                                                            method="delete"
                                                            as="div"
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
                                                            "Reconfirmer le match contre" +
                                                            match.visitorTeam
                                                                .name
                                                        }
                                                        method="patch"
                                                        as="div"
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
