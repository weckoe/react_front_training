import {ComponentProps} from "react";

export interface ModalTypes {
    children: ComponentProps<any>,
    visible: boolean,
    setVisible: (visible: boolean) => void;
}