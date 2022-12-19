import {Ticket} from "./TicketItemTypes";

export interface TicketsState {
    tickets: Ticket[];
    totalPages: number;
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TicketsActionTypes {
    FETCH_TICKETS = "FETCH_TICKETS",
    FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS",
    FETCH_TICKETS_ERROR = "FETCH_TICKETS_ERROR",
    SET_TICKETS_PAGE = "SET_TICKETS_PAGE",
    CREATE_TICKET = "CREATE_TICKET"
}

interface FetchTicketsAction {
    type: TicketsActionTypes.FETCH_TICKETS
}

interface FetchTicketsSuccessAction {
    type: TicketsActionTypes.FETCH_TICKETS_SUCCESS;
    payload: [];
    totalPages: number
}

interface FetchTicketsErrorAction {
    type: TicketsActionTypes.FETCH_TICKETS_ERROR;
    payload: Ticket;
}

interface CreateTicketsAction {
    type: TicketsActionTypes.CREATE_TICKET;
    payload: Ticket;
}

interface SetTicketsPage {
    type: TicketsActionTypes.SET_TICKETS_PAGE;
    payload: number;
}

export type TicketsAction =
    FetchTicketsAction
    | FetchTicketsErrorAction
    | FetchTicketsSuccessAction
    | CreateTicketsAction
    | SetTicketsPage