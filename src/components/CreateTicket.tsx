import React, {FC, FormEvent, useState} from 'react';
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import CreateTicketProps from "../types/CreateTicketTypes";

const CreateTicket: FC<CreateTicketProps> = ({addTicket}): JSX.Element => {
    const [ticket, setTicket] = useState({title: "", description: ""});

    const createTicket = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const newTicket = {
            ...ticket,
            user_id: localStorage.getItem("user_id") || "null"
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket({...ticket, title: e.target.value})}
            ></Input>
            <Input
                value={ticket.description}
                placeholder="Description"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket({
                    ...ticket,
                    description: e.target.value
                })}
            ></Input>
            <Button onClick={createTicket}>Create Ticket</Button>
        </div>
    );
};

export default CreateTicket;