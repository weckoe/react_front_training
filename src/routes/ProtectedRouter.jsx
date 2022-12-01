import {useAuth} from "../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";

function ProtectedRouter({children}) {
    const {isAuth} = useAuth();
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        if (isAuth === false) {
            navigate("/login");
        } else {
            setLoggedIn(true);
        }
    }, [])
    if (loggedIn) {
        return children
    }

}

export default ProtectedRouter;