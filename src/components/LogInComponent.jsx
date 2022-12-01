import React from 'react';
import classes from "../styles/LogIn.module.css";
import Input from "../UI/input/input";
import Button from "../UI/button/Button";

const LogIn = ({login, setUsername, setPassword}) => {
    return (
        <div>
            <div className={classes.LogInForm}>
                <div className={classes.LogInTitle}>
                    Sign In
                </div>
                <div>
                    <Input onChange={e => setUsername(e.target.value)} placeholder="Username"/>
                </div>
                <div className={classes.LogInPasswordInput}>
                    <Input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
                </div>
                <div className={classes.LogInButton}>
                    <Button onClick={login}>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;