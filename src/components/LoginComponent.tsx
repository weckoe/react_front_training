import React, {ChangeEvent, FC} from 'react';
import classes from "../styles/LogIn.module.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoginTypes from "../types/LoginTypes";

const LogIn: FC<LoginTypes> = ({login, setUsername, setPassword}): JSX.Element => {
    return (
        <div>
            <div className={classes.LogInForm}>
                <div className={classes.LogInTitle}>
                    Sign In
                </div>
                <div>
                    <TextField
                        label="Username" variant="standard"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    />
                </div>
                <div className={classes.LogInPasswordInput}>
                    <TextField
                        label="Password" variant="standard"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                </div>
                <div className={classes.LogInButton}>
                    <Button onClick={login} variant="contained">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;