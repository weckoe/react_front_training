export const TicketsActionTypes = {
    FETCH_TICKETS: "FETCH_TICKETS",
    FETCH_TICKETS_SUCCESS: "FETCH_TICKETS_SUCCESS",
    FETCH_TICKETS_ERROR: "FETCH_TICKETS_ERROR",
    SET_TICKETS_PAGE: "SET_TICKETS_PAGE",
    CREATE_TICKET: "CREATE_TICKET"
}
const initialState = {
    tickets: [],
    totalPages: 1,
    page: 1,
    limit: 1,
    loading: false,
    error: null
}

export const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case TicketsActionTypes.FETCH_TICKETS:
            return {...state, loading: true, error: null}
        case TicketsActionTypes.FETCH_TICKETS_SUCCESS:
            return {...state, loading: false, error: null, tickets: action.tickets, totalPages: action.totalPages}
        case TicketsActionTypes.FETCH_TICKETS_ERROR:
            return {...state, loading: false, error: state.error}
        case TicketsActionTypes.SET_TICKETS_PAGE:
            return {...state, page: action.payload}
        case TicketsActionTypes.CREATE_TICKET:
            console.log(state, action.payload)
            return {...state, tickets: [...state.tickets, action.payload]}
        default:
            return state
    }
}