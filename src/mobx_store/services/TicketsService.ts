import FetchTickets from "../../API/fetchTickets";
import {getPageCount} from "../../utils/pagesCounter";

class TicketsService {
    get = async (limit: number, page: number, user_id: string) => {
        const response = await FetchTickets(page, limit, user_id)
        const totalCount: string | undefined = response.x_total_count
        const totalPages = getPageCount(Number(totalCount), limit)
        return {tickets: response.data, totalPages: totalPages}
    }
}


export default TicketsService;