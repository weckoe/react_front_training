import {users} from "./fake_api_data"


export default function get_user(username, password) {
    // supposed to be request to API
    return users?.find(user => user.username === username && user.password === password)
}
