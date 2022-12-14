import {TicketsActionTypes} from "../../types/Tickets";
import axios from "axios";
import {getPageCount} from "../../utils/pagesCounter";
import {Ticket} from "../../types/TicketItemTypes";
import {Dispatch} from "redux";

export const fetchTickets = (page = 1, limit = 2, user_id: string) => {
    return async function (dispatch: Dispatch) {
        try {
            dispatch(
                {type: TicketsActionTypes.FETCH_TICKETS}
            )

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos', {
                    params: {
                        _limit: limit,
                        _page: page,
                        userId: user_id

                    }

                }
            )
            const totalCount: string = response.headers["x-total-count"] || "20"
            dispatch(
                {
                    type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
                    payload: response.data,
                    totalPages: getPageCount(Number(totalCount), limit)
                }
            )
        } catch (e) {
            dispatch(
                {type: TicketsActionTypes.FETCH_TICKETS_ERROR, error: "Fetching tickets failed"}
            )
        }
    }
}


export function setTicketPage(page: number) {
    return {type: TicketsActionTypes.SET_TICKETS_PAGE, payload: page}
}


export function createTicket(newTicket: Ticket) {
    return {type: TicketsActionTypes.CREATE_TICKET, payload: newTicket}
}