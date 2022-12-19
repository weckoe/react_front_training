export interface UsersState {
    username: string,
    password: string,
    loggedIn: false,
    loading: false,
    error: null
}

export enum UserActionTypes {
    LOGIN_USER = "LOGIN_USER",
    LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
    LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
    SET_USERNAME = "SET_USERNAME",
    SET_PASSWORD = "SET_PASSWORD",
    SET_LOGGED_IN = "SET_LOGGED_IN"
}

interface LoginUser {
    type: UserActionTypes.LOGIN_USER
}

interface LoginUserSuccess {
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    loggedIn: boolean,
    userId: string
}

interface LoginUserError {
    type: UserActionTypes.LOGIN_USER_ERROR;
    payload: string;
}

interface SetUsername {
    type: UserActionTypes.SET_USERNAME,
    payload: string
}

interface SetPassword {
    type: UserActionTypes.SET_PASSWORD,
    payload: string
}

interface SetLoggedIn {
    type: UserActionTypes.SET_LOGGED_IN,
    payload: boolean
}

export type UsersAction =
    LoginUser
    | LoginUserSuccess
    | LoginUserError
    | SetUsername
    | SetPassword
    | SetLoggedIn