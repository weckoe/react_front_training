import UsersService from "./services/UsersService";
import {makeAutoObservable, runInAction} from "mobx";

class UsersStore {
    username: string = "";
    password: string = "";
    loggedIn: boolean = false
    usersService: UsersService = new UsersService()

    error: boolean = false

    loading: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    login() {
        runInAction(() => {
            try {
                this.loading = true
                this.loggedIn = this.usersService.loginUser(this.username, this.password)
                this.loading = false
            } catch (e) {
                console.log(e)
                this.error = true
            }
        })
    }

    setUsername = (username: string) => {
        this.username = username
    }

    setPassword = (password: string) => {
        this.password = password
    }
}


export default new UsersStore();