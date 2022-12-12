import {UserActionTypes} from "../../types/Users";
import get_user from "../../API/login";
import {Dispatch} from "redux";

const addCookies = () => localStorage.setItem('loggedIn', "true")

export const loginUser = (username: string, password: string) => {
    return async function (dispatch: Dispatch) {
        try {
            dispatch(
                {type: UserActionTypes.LOGIN_USER}
            )
            const user = get_user(username, password);
            addCookies()


            if (user) {
                localStorage.setItem("userId", user.id.toString())
                dispatch(
                    {
                        type: UserActionTypes.LOGIN_USER_SUCCESS,
                        userId: user.id,
                        loggedIn: true
                    }
                )
            } else {
                dispatch(
                    {type: UserActionTypes.LOGIN_USER_ERROR, error: "Username or Password was incorrect"}
                )
            }

        } catch (e) {
            dispatch(
                {type: UserActionTypes.LOGIN_USER_ERROR, error: "Login User failed"}
            )
        }
    }
};

export function setUsername(username: string) {
    return {type: UserActionTypes.SET_USERNAME, payload: username}
}

export function setPassword(password: string) {
    return {type: UserActionTypes.SET_PASSWORD, payload: password}
}

export function setLoggedIn(loggedIn: boolean) {
    return {type: UserActionTypes.SET_LOGGED_IN, payload: loggedIn}
}