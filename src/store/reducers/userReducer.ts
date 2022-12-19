import {UserActionTypes, UsersAction} from "../../types/Users";

const initialState = {
    username: "",
    password: "",
    loggedIn: false,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UsersAction) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER:
            return {...state, loading: true, error: null}
        case UserActionTypes.LOGIN_USER_SUCCESS:
            return {...state, loading: false, error: null, loggedIn: action.loggedIn, userId: action.userId}
        case UserActionTypes.LOGIN_USER_ERROR:
            return {...state, loading: false, error: state.error}
        case UserActionTypes.SET_USERNAME:
            return {...state, loading: false, error: false, username: action.payload}
        case UserActionTypes.SET_PASSWORD:
            return {...state, loading: false, error: false, password: action.payload}
        case UserActionTypes.SET_LOGGED_IN:
            return {...state, loading: false, error: false, loggedIn: action.payload}
        default:
            return state
    }
}