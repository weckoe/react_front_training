import React, {useState} from "react";
import {RouterProvider} from "react-router-dom";
import {AuthContext} from "./context/authContext";
import {BrowserRouter} from "./routes/BrowerRouter";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <RouterProvider router={BrowserRouter}/>
        </AuthContext.Provider>

    );
}

export default App;
