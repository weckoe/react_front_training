import React, {useEffect, useState, FC} from 'react';
import TicketItemComponent from "./TicketItem";
import classes from "../styles/TicketItem.module.css";
import Button from "../UI/button/Button";
import Pagination from "../UI/pagination/Pagination";
import Modal from "../UI/modals/Modal";
import CreateTicket from "./CreateTicket";
import {useActions} from "../hooks/useActions";
import {Ticket} from "../types/TicketItemTypes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const TicketListComponent: FC = () => {
    const {page, error, loading, tickets, limit, totalPages} = useTypedSelector(state => state.tickets)
    const {fetchTickets, setTicketPage, createTicket} = useActions()
    const user_id = localStorage.getItem("userId")

    useEffect(() => {
        fetchTickets(page, limit, user_id!)
    }, [page])

    const changePage = (page: number) => {
        setTicketPage(page)
    }
    const addTicket = (newTicket: Ticket) => {
        createTicket(newTicket)
        setModal(false)
    }
    const [modal, setModal] = useState(false)

    return (
        <div>
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
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
            <Modal visible={modal} setVisible={setModal}>
                <CreateTicket addTicket={addTicket}/>
            </Modal>
            <Button onClick={() => setModal(true)}>Create Ticket</Button>
        </div>
    );
};

export default TicketListComponent;