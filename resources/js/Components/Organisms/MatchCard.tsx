import moment from "moment";
import RegistrationVolunteerModal from "./RegistrationVolunteerModal";
import useModal from "@/Hooks/useModal";
import SelectOptionsProps from "@/Models/SelectOptionsProps";

interface MatchCardProps {
    visitorTeamName: string;
    category: string;
    gameDate: Date | null;
    isHomeMatch: boolean;
    gameId: string;
    volunteerTypes: Array<SelectOptionsProps>;
}

export default function MatchCard(props: MatchCardProps) {
    const { isOpen, toggle } = useModal();

    const className = props.isHomeMatch
        ? "match-card  clickable"
        : "match-card";

    return props.isHomeMatch ? (
        <>
            <div className={className} onClick={toggle}>
                <p>{props.visitorTeamName}</p>
                <p className={"bold"}>{props.category}</p>
                {props.isHomeMatch ? <p>A domicile</p> : <></>}
                <p>{moment(props.gameDate).format("DD/MM/YYYY HH:mm")}</p>
            </div>

            <RegistrationVolunteerModal
                isOpen={isOpen}
                toggle={toggle}
                visitorTeamName={props.visitorTeamName}
                gameDate={props.gameDate}
                gameCategory={props.category}
                gameId={props.gameId}
                volunteerTypes={props.volunteerTypes}
            />
        </>
    ) : (
        <>
            <div className={"match-card no-hover"}>
                <p>{props.visitorTeamName}</p>
                <p className={"bold"}>{props.category}</p>
                {props.isHomeMatch ? <p>A domicile</p> : <></>}
                <p>{moment(props.gameDate).format("DD/MM/YYYY HH:mm")}</p>
            </div>
        </>
    );
}
