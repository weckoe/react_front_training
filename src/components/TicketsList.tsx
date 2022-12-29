import React, {useEffect, useState, FC, ChangeEvent} from 'react';
import TicketItemComponent from "./TicketItem";
import classes from "../styles/TicketItem.module.css";
import Button from '@mui/material/Button';
import Modal from "../UI/modals/Modal";
import CreateTicket from "./CreateTicket";
import {Ticket} from "../types/TicketItemTypes";
import Pagination from '@mui/material/Pagination';
import ticketsStore from "../mobx_store/ticketsStore"
import {observer} from "mobx-react-lite";

const TicketListComponent: FC = observer(() => {

    const user_id = localStorage.getItem("userId")

    useEffect(() => {
        ticketsStore.fetchTickets(ticketsStore.page, ticketsStore.limit, user_id!)
    }, [ticketsStore.page])

    const changePage = (event: ChangeEvent<unknown>, page: number) => {
        ticketsStore.setPage(page)
    }
    const addTicket = (newTicket: Ticket) => {
        ticketsStore.createTicket(newTicket)
        setModal(false)
    }
    const [modal, setModal] = useState(false)

    return (
        <div className={classes.content}>
            {ticketsStore.getTickets()
                ? (ticketsStore.getTickets() as Ticket[]).map((ticket) => {
                    console.log(ticket, "tickets")
                    return (<div className={classes.frame}>
                            <TicketItemComponent
                                key={user_id!}
                                user_id={user_id!}
                                title={ticket.title}
                            />
                        </div>
                    )
                })
                : <h1> LOADING...</h1>
            }
            <Pagination
                count={ticketsStore.totalPages}
                onChange={changePage}
            />
            <Modal visible={modal} setVisible={setModal}>
                <CreateTicket addTicket={addTicket}/>
            </Modal>
            <Button style={!modal ? {display: "block"} : {display: "none"}} variant="contained"
                    onClick={() => setModal(true)}>Create
                Ticket</Button>

        </div>
    );
});

export default TicketListComponent;