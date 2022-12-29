import get_user from "../../API/login";
const addCookies = () => localStorage.setItem('loggedIn', "true")
class UsersService {
    loginUser(username: string, password: string) {
        const user = get_user(username, password);
        addCookies()


        if (user) {
            localStorage.setItem("userId", user.id.toString())
            return true
        } else {
            return false
        }
    }
}

export default UsersService;