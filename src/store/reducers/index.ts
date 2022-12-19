import {combineReducers} from "redux";
import {ticketReducer} from "./ticketReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers(
    {
        tickets: ticketReducer,
        users: userReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>
