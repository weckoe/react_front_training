import React from 'react';

const TicketItemComponent = ({user_id, title}) => {
    return (
        <div>
            <h1>title: {title}</h1>
            <h3>username: {user_id}</h3>
        </div>
    );
};

export default TicketItemComponent;