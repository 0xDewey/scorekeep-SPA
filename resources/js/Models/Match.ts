import { LocalTeam } from "./LocalTeam";
import { VisitorTeam } from "./VisitorTeam";
import { Volunteer } from "./Volunteer";

export interface Match {
    uuid: string;
    address: string;
    CPO: string;
    city: string;
    category: string;
    gameDate: Date | null;
    isHomeMatch: boolean;
    isCancelled: boolean;
    timekeeperId?: string;
    secretaryId?: string;
    roomManagerId?: string;
    drinkManagerId?: string;
    timekeeper?: Volunteer;
    secretary?: Volunteer;
    roomManager?: Volunteer;
    drinkManager?: Volunteer;
    roomManagers: Volunteer[];
    secretaries: Volunteer[];
    timekeepers: Volunteer[];
    drinkManagers: Volunteer[];
    localTeam: LocalTeam;
    visitorTeam: VisitorTeam;
    visitorTeamName?: string;
    localTeamId?: number;
}
