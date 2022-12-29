import React, {FC, FormEvent, useState} from 'react';
import CreateTicketProps from "../types/CreateTicketTypes";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import classes from "../styles/CreateTicketForm.module.css"

const CreateTicket: FC<CreateTicketProps> = ({addTicket}): JSX.Element => {
    const [ticket, setTicket] = useState({title: "", description: ""});

    const createTicket = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const newTicket = {
            ...ticket,
            user_id: localStorage.getItem("user_id") || "null"
        }
        addTicket(newTicket)
    }

    return (
        <div>
            <h1>Create Ticket</h1>
            <div className={classes.create__ticket}>
                <TextField
                    className={classes.title}
                    label="Description"
                    variant="standard"
                    value={ticket.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket({...ticket, title: e.target.value})}
                />
                <br/>
                <TextField
                    className={classes.description}
                    label="Title"
                    variant="standard"
                    value={ticket.description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket({
                        ...ticket,
                        description: e.target.value
                    })}
                />
            </div>
            <div className={classes.button}>
                <Button onClick={createTicket}>Create Ticket</Button>
            </div>
        </div>
    );
};

export default CreateTicket;