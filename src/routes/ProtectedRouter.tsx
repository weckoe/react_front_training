import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function ProtectedRouter({children}: any) {
    let navigate = useNavigate();
    const loggedIn: string = localStorage.getItem('loggedIn') || "false";
    useEffect(() => {
        if (loggedIn === "false") {
            console.log("fdsfs")
            navigate("/login")
        }
    }, [loggedIn])
    if (loggedIn === "true") {
        return children
    }

}

export default ProtectedRouter;