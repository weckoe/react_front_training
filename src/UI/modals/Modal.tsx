import React, {FC} from 'react';
import cl from './Modal.module.css';
import {ModalTypes} from "../../types/ModalTypes";

const Modal: FC<ModalTypes> = ({children, visible, setVisible}): JSX.Element => {

    const rootClasses = [cl.Modal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;