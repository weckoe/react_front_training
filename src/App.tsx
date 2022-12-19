import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import ProtectedRouter from "./routes/ProtectedRouter";
import LogInPage from "./pages/Login";
import LogOut from "./components/LogOut";
import Chat from "./pages/Chat";
import MUINavbar from "./components/MUINavbar";

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <MUINavbar/>
            <Routes>
                <Route path='/home' element=
                    {
                        <ProtectedRouter
                            children={<Home/>}
                        />

                    }
                />
                <Route path='/tickets' element=
                    {
                        <ProtectedRouter
                            children={<Tickets/>}
                        />
                    }
                />
                <Route path='/login' element={<LogInPage/>}/>
                <Route path='/logout' element={<LogOut/>}/>
                <Route path='/chat' element=
                    {
                        <ProtectedRouter
                            children={<Chat/>}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
