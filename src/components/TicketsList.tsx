import React, {useEffect, useState, FC, ChangeEvent} from 'react';
import TicketItemComponent from "./TicketItem";
import classes from "../styles/TicketItem.module.css";
import Button from '@mui/material/Button';
import Modal from "../UI/modals/Modal";
import CreateTicket from "./CreateTicket";
import {useActions} from "../hooks/useActions";
import {Ticket} from "../types/TicketItemTypes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Pagination from '@mui/material/Pagination';

const TicketListComponent: FC = () => {
    const {page, error, loading, tickets, limit, totalPages} = useTypedSelector(state => state.tickets)
    const {fetchTickets, setTicketPage, createTicket} = useActions()
    const user_id = localStorage.getItem("userId")

    useEffect(() => {
        fetchTickets(page, limit, user_id!)
    }, [page])

    const changePage = (event: ChangeEvent<unknown>, page: number) => {
        setTicketPage(page)
    }
    const addTicket = (newTicket: Ticket) => {
        createTicket(newTicket)
        setModal(false)
    }
    const [modal, setModal] = useState(false)

    return (
        <div className={classes.content}>
            {!loading
                ? (tickets as Ticket[]).map((ticket) => {
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
            {error && <h1>ERROR</h1>}
            <Pagination
                count={totalPages}
                onChange={changePage}
            />
            <Modal visible={modal} setVisible={setModal}>
                <CreateTicket addTicket={addTicket}/>
            </Modal>
            <Button variant="contained" onClick={() => setModal(true)}>Create Ticket</Button>
        </div>
    );
};

export default TicketListComponent;