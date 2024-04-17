import React, { FormEventHandler, useState } from "react";
import moment from "moment";
import { Volunteer } from "@/Models/Volunteer";
import RadioInput from "@/Components/Atoms/RadioInput";
import { router, useForm } from "@inertiajs/react";
import { Match } from "@/Models/Match";
import { RequestPayload } from "@inertiajs/core";

interface VolunteerSelectionProps {
    match: Match;
}

export default function VolunteerSelection({ match }: VolunteerSelectionProps) {
    const { post, setData, data } = useForm({
        matchId: match.uuid,
        timekeeperId: match.timekeeperId,
        secretaryId: match.secretaryId,
        roomManagerId: match.roomManagerId,
        drinkManagerId: match.drinkManagerId,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("dashboard.volunteers.store"));
    };

    if (!match.isHomeMatch) {
        return (
            <tr className={"hidden-xs"}>
                <td>
                    <div>
                        <p>{match.visitorTeamName}</p>
                        <p>{match.category}</p>
                        <p>
                            {moment(match.gameDate).format("DD/MM/YYYY HH:mm")}
                        </p>
                    </div>
                </td>
                <td colSpan={4}>Match à l'extérieur</td>
                <td></td>
            </tr>
        );
    }

    return (
        <tr>
            <td>
                <div>
                    <p>{match.visitorTeamName}</p>
                    <p>{match.category}</p>
                    <p>{moment(match.gameDate).format("DD/MM/YYYY HH:mm")}</p>
                </div>
            </td>
            <td>
                <div className={"volunteers-grid-display"}>
                    {match.timekeepers.map((timekeeper: Volunteer) => (
                        <RadioInput
                            key={timekeeper.uuid}
                            id={`${timekeeper.uuid}`}
                            name={"timekeeperId"}
                            text={timekeeper.name}
                            onSelect={(e) => {
                                setData("timekeeperId", e.target.id);
                                match.timekeeperId = e.target.id;
                            }}
                            isSelected={timekeeper.uuid === match.timekeeperId}
                        />
                    ))}
                </div>
            </td>

            <td>
                <div className={"volunteers-grid-display"}>
                    {match.secretaries.map((secretary: Volunteer) => (
                        <RadioInput
                            key={secretary.uuid}
                            id={`${secretary.uuid}`}
                            name={"secretaries"}
                            text={secretary.name}
                            onSelect={(e) => {
                                match.secretaryId = e.target.id;
                                setData("secretaryId", e.target.id);
                            }}
                            isSelected={secretary.uuid === match.secretaryId}
                        />
                    ))}
                </div>
            </td>

            <td>
                <div className={"volunteers-grid-display"}>
                    {match.roomManagers.map((roomManager: Volunteer) => (
                        <RadioInput
                            key={roomManager.uuid}
                            id={`${roomManager.uuid}`}
                            name={"roomManagers"}
                            text={roomManager.name}
                            onSelect={(e) => {
                                setData("roomManagerId", e.target.id);
                                match.roomManagerId = e.target.id;
                            }}
                            isSelected={
                                roomManager.uuid === match.roomManagerId
                            }
                        />
                    ))}
                </div>
            </td>

            <td>
                <div className={"volunteers-grid-display"}>
                    {match.drinkManagers.map((drinkManager: Volunteer) => (
                        <RadioInput
                            key={drinkManager.uuid}
                            id={`${drinkManager.uuid}`}
                            name={"drinkManagers"}
                            text={drinkManager.name}
                            onSelect={(e) => {
                                setData("drinkManagerId", e.target.id);
                                match.drinkManagerId = e.target.id;
                            }}
                            isSelected={
                                drinkManager.uuid === match.drinkManagerId
                            }
                        />
                    ))}
                </div>
            </td>
            <td>
                <form onSubmit={submit}>
                    <button className="valid" type="submit">
                        Mettre à jour
                    </button>
                </form>
            </td>
        </tr>
    );
}
