import {TicketsState, TicketsAction, TicketsActionTypes} from "../../types/Tickets";


const initialState = {
    tickets: [],
    totalPages: 1,
    page: 1,
    limit: 1,
    loading: false,
    error: null
}

export const ticketReducer = (state = initialState, action: TicketsAction): TicketsState => {
    switch (action.type) {
        case TicketsActionTypes.FETCH_TICKETS:
            return {...state, loading: true, error: null}
        case TicketsActionTypes.FETCH_TICKETS_SUCCESS:
            return {...state, loading: false, error: null, tickets: action.payload, totalPages: action.totalPages}
        case TicketsActionTypes.FETCH_TICKETS_ERROR:
            return {...state, loading: false, error: state.error}
        case TicketsActionTypes.SET_TICKETS_PAGE:
            return {...state, page: action.payload}
        case TicketsActionTypes.CREATE_TICKET:
            return {...state, tickets: [...state.tickets, action.payload]}
        default:
            return state
    }
}