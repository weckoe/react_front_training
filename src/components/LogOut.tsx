import {useEffect} from 'react';
import {useActions} from "../hooks/useActions";

const LogOut = () => {
    const deleteLocal = () => {
        localStorage.removeItem('loggedIn')
    }

    const {setLoggedIn} = useActions()

    useEffect(() => {
            if (localStorage.getItem('loggedIn') === "true") {
                deleteLocal()
                setLoggedIn(false)

            }
        }, []
    )

    return <h3>Logout was successful</h3>
};

export default LogOut;