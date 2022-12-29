import React from 'react';
import {useNavigate} from "react-router-dom";
import LogIn from "../components/LoginComponent";
import usersStore from "../mobx_store/usersStore";

function LogInPage() {

    let navigate = useNavigate();


    const loginUser = () => {
        usersStore.login()
        if (usersStore.loading) {
            return <h1>LOADING....</h1>
        }
        if (usersStore.loggedIn) {
            return navigate("/tickets")
        }
        if (usersStore.error) {
            alert(usersStore.error)
            return navigate("login")
        }
    }

    return (
        <LogIn login={loginUser} setUsername={usersStore.setUsername} setPassword={usersStore.setPassword}/>
    );
}

export default LogInPage;