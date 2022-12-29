import {Ticket} from "../types/TicketItemTypes";
import {action, makeAutoObservable, observable, runInAction, toJS} from "mobx";
import TicketsService from "./services/TicketsService";

class TicketsStore {
    ticketsService = new TicketsService()
    page: number = 1;
    limit: number = 1;
    tickets: Ticket[] = [];
    totalPages: number = 0;

    constructor() {
        makeAutoObservable(this, {tickets: observable, totalPages: observable, fetchTickets: action})
    }

    fetchTickets = async (limit: number, page: number, user_id: string) => {
        this.ticketsService.get(limit, page, user_id).then((responseData) => {
            runInAction(() => {
                this.tickets = responseData.tickets
                this.totalPages = responseData.totalPages
            })
        })
    }

    getTickets(){
        return toJS(this.tickets)
    }

    setPage(page: number){
        this.page = page
    }

    createTicket(newTicket: Ticket) {
        this.tickets = [...this.tickets, newTicket]
    }

}

const ticketsStore = new TicketsStore();
export default ticketsStore;