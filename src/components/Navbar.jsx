import React, {useContext} from 'react';
import classes from "../styles/styles.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/authContext";
import {useAuth} from "../hooks/useAuth";

const Navbar = () => {
    const {isAuth} = useAuth(AuthContext)
    return (
        <div className={classes.navbar}>
            <Link to="/tickets"> Tickets </Link>
            <Link to="/chat">Chat</Link>
            {isAuth === true ? <Link to="/logout"> Logout </Link> : <Link to="/login"> Login </Link>}
        </div>
    );
};

export default Navbar;