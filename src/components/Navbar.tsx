import React, {useEffect} from 'react';
import classes from "../styles/Navbar.module.css";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar = () => {
    const {loggedIn} = useTypedSelector(state => state.users)
    const {setLoggedIn} = useActions()
    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn")
        console.log(loggedIn)
        if (loggedIn === "true") {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [loggedIn])

    return (
        <div className={classes.navbar}>
            <Link to="/tickets"> Tickets </Link>
            <Link to="/chat">Chat</Link>
            {loggedIn ? <Link to="/logout"> Logout </Link> :
                <Link to="/login"> Login </Link>}
        </div>
    );
};

export default Navbar;