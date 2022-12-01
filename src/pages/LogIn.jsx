import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/authContext";
import {useNavigate} from "react-router-dom";
import get_user from "../API/login";
import LogIn from "../components/LogInComponent";


function LogInPage() {
    const {setIsAuth} = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate();


    const login = (event) => {
        event.preventDefault()
        const user = get_user(username, password);
        if (user) {
            setIsAuth(true)
            console.log(user.id)
            localStorage.setItem("user_id", user.id)
            navigate("/tickets")
        } else {
            setIsAuth(false)
        }
    }

    return (
        <LogIn login={login} setUsername={setUsername} setPassword={setPassword}/>
    );
}

export default LogInPage;