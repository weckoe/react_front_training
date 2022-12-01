import React from 'react';
import classes from "../styles/Home.module.css";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={classes.navbar}>
            <Link to="/login">Login</Link>
            <Link to="/tickets">Login</Link>
        </div>
    );
};

export default Home;