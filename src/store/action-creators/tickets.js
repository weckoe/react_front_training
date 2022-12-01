import {TicketsActionTypes} from "../reducers/ticketReducer"
import axios from "axios";
import {getPageCount} from "../../utils/pagesCounter";

export const fetchTickets = (page = 1, limit = 2, user_id) => {
    return async function (dispatch) {
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
            dispatch(
                {
                    type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
                    tickets: response.data,
                    totalPages: getPageCount(response.headers["x-total-count"], limit)
                }
            )
        } catch (e) {
            dispatch(
                {type: TicketsActionTypes.FETCH_TICKETS_ERROR, error: "Fetching tickets failed"}
            )
        }
    }
}


export function setTicketPage(page) {
    return {type: TicketsActionTypes.SET_TICKETS_PAGE, payload: page}
}


export function createTicket(newTicket) {
    console.log(newTicket)
    return {type: TicketsActionTypes.CREATE_TICKET, payload: newTicket}
}