import {ChangeEvent} from "react";

export interface InputProps {
    id?: string,
    value?: string,
    placeholder: string,
    type: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    required?: boolean
}