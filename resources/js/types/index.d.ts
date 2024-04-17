import {LocalTeam} from "@/Models/LocalTeam";
import {Match} from "@/Models/Match";
import {VisitorTeam} from "@/Models/VisitorTeam";
import {Volunteer} from "@/Models/Volunteer";

export interface User {
    id: number;
    name: string;
    localTeamId: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    localTeam: LocalTeam;
    match: Match;
    visitorTeam: VisitorTeam;
    volunteer: Volunteer;
};
