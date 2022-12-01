import axios from "axios";


async function getUserTickets(user_id, limit, page) {
    // supposed to be request to API
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos', {
            params: {
                _limit: limit,
                _page: page,
                userId: user_id

            }
        }
    )
    return response;
}

export default async function getSingleTicket(user_id, limit, page) {
    // supposed to be request to API
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos', {
            params: {
                _limit: limit,
                _page: page,
                userId: user_id

            }
        }
    )
    return response;
}