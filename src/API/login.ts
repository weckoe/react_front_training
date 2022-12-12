import {users} from "./fake_api_data"
import UserType from "../types/UserTypes";


export default function get_user(username: string, password: string): UserType | undefined {
    // supposed to be request to API
    return users?.find(user => user.username === username && user.password === password)
}
