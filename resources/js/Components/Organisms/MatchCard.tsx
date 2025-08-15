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
    const clickable = props.isHomeMatch;
    return (
        <>
            <div
                className={`p-4 bg-card rounded-lg shadow-sm transition-shadow duration-200 ${
                    clickable ? "hover:shadow-lg cursor-pointer" : ""
                }`}
                onClick={toggle}
            >
                <p className="text-lg font-medium">{props.visitorTeamName}</p>
                <p className={"text-sm text-gray-600 font-semibold"}>
                    {props.category}
                </p>
                <p className="text-center text-sm text-gray-500">
                    {props.address}, <br />
                    {props.city} {props.CPO}
                </p>
                {props.isHomeMatch ? (
                    <p className="text-xs text-primary">A domicile</p>
                ) : (
                    <></>
                )}
                <p className="text-xs text-gray-500">
                    {moment(props.gameDate).format("DD/MM/YYYY HH:mm")}
                </p>
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
