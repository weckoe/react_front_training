import React, {ChangeEvent, FC} from 'react';
import classes from "../styles/LogIn.module.css";
import Input from "../UI/input/Input"
import Button from "../UI/button/Button";
import LoginTypes from "../types/LoginTypes";

const LogIn: FC<LoginTypes> = ({login, setUsername, setPassword}): JSX.Element => {
    return (
        <div>
            <div className={classes.LogInForm}>
                <div className={classes.LogInTitle}>
                    Sign In
                </div>
                <div>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        placeholder="Username"
                        type="text"
                    />
                </div>
                <div className={classes.LogInPasswordInput}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        placeholder="Password" type="password"
                    />
                </div>
                <div className={classes.LogInButton}>
                    <Button onClick={login}>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;