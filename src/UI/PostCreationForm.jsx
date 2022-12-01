import React from 'react';
import Input from "./input/input";

const PostCreationForm = () => {
    return (
        <div>
            <Input placeholder="Ticket Title"></Input>
            <Input placeholder="Ticket Description"></Input>
        </div>
    );
};

export default PostCreationForm;