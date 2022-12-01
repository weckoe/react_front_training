import React, {useState} from 'react';
import Input from "../UI/input/input";
import Button from "../UI/button/Button";

const CreateTicket = ({addTicket}) => {
    const [ticket, setTicket] = useState({title: "", description: ""});

    const createTicket = (e) => {
        e.preventDefault()
        const newTicket = {
            ...ticket,
            user_id: localStorage.getItem("user_id")
        }
        addTicket(newTicket)
    }

    return (
        <div>
            <h1>Create Ticket</h1>
            <Input
                value={ticket.title}
                placeholder="Title"
                type={"text"}
                onChange={e => setTicket({...ticket, title: e.target.value})}
            ></Input>
            <Input
                value={ticket.description}
                placeholder="Description"
                type="text"
                onChange={e => setTicket({...ticket, description: e.target.value})}
            ></Input>
            <Button onClick={createTicket}>Create Ticket</Button>
        </div>
    );
};

export default CreateTicket;