import React from "react";


export interface IProps {
    disabled?: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void ,

}

export interface ButtonProps extends IProps {
    children: string,
    props?: IProps,
}