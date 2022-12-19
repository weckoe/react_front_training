import React from 'react';
import {useNavigate} from "react-router-dom";
import LogIn from "../components/LoginComponent";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


function LogInPage() {
    const {username, password, loggedIn, loading, error} = useTypedSelector(state => state.users)
    const {loginUser, setUsername, setPassword} = useActions()

    let navigate = useNavigate();


    const login = () => {
        loginUser(username, password)
        if (loading) {
            return <h1>LOADING....</h1>
        }
        if (loggedIn) {
            return navigate("/tickets")
        }
        if (error) {
            alert(error)
            return navigate("login")
        }
    }

    return (
        <LogIn login={login} setUsername={setUsername} setPassword={setPassword}/>
    );
}

export default LogInPage;