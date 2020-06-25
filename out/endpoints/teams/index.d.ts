import { IdInfo } from "..";
import Watchable from "../../Watchable";
import WatchableCollection from "../../WatchableCollection";
import { EventOptionsFromTeam, Event } from "../events";
import { MatchOptionsFromTeam, Match } from "../matches";
import { RankingOptionsFromTeam, Ranking } from "../rankings";
import { SkillOptionsFromTeam, Skill } from "../skills";
import { AwardOptionsFromTeam, Award } from "../award";
export declare type Grade = "College" | "High School" | "Middle School" | "Elementary School";
export interface TeamData {
    id: number;
    number: string;
    team_name: string;
    robot_name: string;
    organization: string;
    location: {
        venue: string | null;
        address_1: string | null;
        address_2: string | null;
        city: string | null;
        region: string | null;
        postcode: string | null;
        country: string | null;
        coordinates: {
            lat: string;
            lon: string;
        };
    };
    registered: boolean;
    program: IdInfo;
    grade: Grade;
}
export interface TeamOptionsFromEvent {
    number?: string;
    registered?: boolean;
    grade?: Grade[];
    country?: string[];
}
export declare class Team extends Watchable<TeamData> implements TeamData {
    id: number;
    number: string;
    team_name: string;
    robot_name: string;
    organization: string;
    location: {
        venue: null;
        address_1: null;
        address_2: null;
        city: null;
        region: null;
        postcode: null;
        country: null;
        coordinates: {
            lat: string;
            lon: string;
        };
    };
    registered: boolean;
    program: {
        id: number;
        name: string;
        code: null;
    };
    grade: Grade;
    constructor(data: TeamData);
    /**
     * Gets all events the team has gone to
     * @param options Event Options
     *
     * @example
     * const team = await robotevents.teams.get(number);
     * const events = await team.events({
     *  level: ["State", "National", "Signature"]
     * });
     *
     * for (const event of events) {
     *  console.log(event);
     * }
     *
     */
    events(options?: EventOptionsFromTeam): Promise<WatchableCollection<Event, number>>;
    /**
     * Gets all matches for the team
     * @param options
     *  @param options.event Event IDs
     *  @param options.season Season IDs
     *  @param options.rounds Possible match rounds to search
     *  @param options.instance Possible match instances to search
     *  @param options.matchnum Possible match numbers to search
     *
     * @example
     * const team = await robotevents.teams.get(number);
     * const matches = await team.matches();
     * matches.watch();
     *
     * matches.on("add", match => {
     *  console.log("Match generated")
     * })
     *
     */
    matches(options?: MatchOptionsFromTeam): Promise<WatchableCollection<Match, number>>;
    /**
     * Gets a team's rankings
     * @param options Ranking Options
     *  @param options.event Event IDs
     *  @param options.rank Possible ranks to search for
     *  @param options.season Season IDs
     */
    rankings(options?: RankingOptionsFromTeam): Promise<WatchableCollection<Ranking, number>>;
    /**
     * Gets a team's skills runs
     * @param options Skills Run Options
     *  @param options.event Event IDs to filter
     *  @param options.type Possible skills run types ("driver" or "programming")
     *  @param options.season Season IDs
     */
    skills(options?: SkillOptionsFromTeam): Promise<WatchableCollection<Skill, number>>;
    /**
     * Gets a team's awards
     * @param options Awards Options
     *  @param options.event Event IDs to filter by
     *  @param options.season Season IDs to filter by
     */
    awards(options?: AwardOptionsFromTeam): Promise<WatchableCollection<Award, number>>;
}
export declare function get(numberOrID: string | number): Promise<Team>;
export { search } from "./search";