import React, {FC} from 'react';
import classes from './Button.module.css';
import {ButtonProps} from "../../types/ButtonTypes";

const Button: FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button {...props} className={classes.Button}>
            {children}
        </button>
    );
};

export default Button;