import React, {useEffect} from 'react';
import {useAuth} from "../hooks/useAuth";
import {AuthContext} from "../context/authContext";
import {useNavigate} from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate()
    const {isAuth, setIsAuth} = useAuth(AuthContext)
    useEffect(() => {
            if (isAuth === true) {
                setIsAuth(false)
                navigate("/login")
            }
        }, []
    )
};

export default LogOut;