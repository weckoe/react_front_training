import {Ticket} from "./TicketItemTypes";

export default interface CreateTicketProps {
    addTicket: (ticket: Ticket) => void
}