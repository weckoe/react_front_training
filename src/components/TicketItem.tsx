import React, {FC} from 'react';
import {TicketItemProps} from "../types/TicketItemTypes";

const TicketItemComponent: FC<TicketItemProps> = ({user_id, title}): JSX.Element => {
    return (
        <div>
            <h1>title: {title}</h1>
            <h3>user_id: {user_id}</h3>
        </div>
    );
};

export default TicketItemComponent;