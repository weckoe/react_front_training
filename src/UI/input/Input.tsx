import React, {FC} from 'react';
import classes from './Input.module.css';
import {InputProps} from "../../types/InputProps";

const Input: FC<InputProps> = (props: InputProps): JSX.Element => {
    return (
        <div>
            <input className={classes.Input} {...props} />
        </div>
    );
}

export default Input;