import moment from "moment";
import RegistrationVolunteerModal from "./RegistrationVolunteerModal";
import useModal from "@/Hooks/useModal";
import SelectOptionsProps from "@/Models/SelectOptionsProps";

interface MatchCardProps {
    visitorTeamName: string;
    address: string;
    CPO: string;
    city: string;
    category: string;
    gameDate: Date | null;
    isHomeMatch: boolean;
    gameId: string;
    volunteerTypes: Array<SelectOptionsProps>;
}

export default function MatchCard(props: MatchCardProps) {
    const { isOpen, toggle } = useModal();
    const className = props.isHomeMatch ? "clickable" : "";
    return (
        <>
            <div className={`match-card ${className}`} onClick={toggle}>
                <p>{props.visitorTeamName}</p>
                <p className={"bold"}>{props.category}</p>
                <p className="text-center">
                    {props.address}, <br />
                    {props.city} {props.CPO}
                </p>
                {props.isHomeMatch ? <p>A domicile</p> : <></>}
                <p>{moment(props.gameDate).format("DD/MM/YYYY HH:mm")}</p>
            </div>
            {props.isHomeMatch && (
                <RegistrationVolunteerModal
                    isOpen={isOpen}
                    toggle={toggle}
                    visitorTeamName={props.visitorTeamName}
                    gameDate={props.gameDate}
                    address={props.address}
                    CPO={props.CPO}
                    city={props.city}
                    gameCategory={props.category}
                    gameId={props.gameId}
                    volunteerTypes={props.volunteerTypes}
                />
            )}
        </>
    );
}
