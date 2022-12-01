import React, {useEffect, useState} from 'react';
import TicketItemComponent from "./TicketItemComponent";
import classes from "../styles/TicketItem.module.css";
import Button from "../UI/button/Button";
import Pagination from "../UI/pagination/Pagination";
import Modal from "../UI/modals/Modal";
import CreateTicket from "./CreateTicket";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const TicketListComponent = () => {
    const {page, error, loading, tickets, limit, totalPages} = useSelector(state => state.tickets)
    const {fetchTickets, setTicketPage, createTicket} = useActions()
    const user_id = localStorage.getItem("user_id");
    useEffect(() => {
        fetchTickets(page, limit, user_id)
    }, [page])

    const changePage = page => {
        setTicketPage(page)
    }
    const addTicket = (newTicket) => {
        createTicket(newTicket)
        setModal(false)
    }
    const [modal, setModal] = useState(false)

    return (
        <div>
            {!loading
                ? tickets?.map(ticket =>
                    <div className={classes.frame}>
                        <TicketItemComponent
                            key={user_id}
                            user_id={user_id}
                            title={ticket.title}
                        />
                    </div>
                )
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