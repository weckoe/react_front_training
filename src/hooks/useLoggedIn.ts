import {useEffect} from "react";

export const useLoggedIn = (setLoggedIn: Function, loggedIn: boolean) => {
    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn")

        if (loggedIn === "true") {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [loggedIn])
}