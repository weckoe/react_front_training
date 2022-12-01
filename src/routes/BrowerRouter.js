import {createBrowserRouter, Outlet} from "react-router-dom";
import LogInPage from "../pages/LogIn";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Tickets from "../pages/Tickets";
import React from "react";
import ProtectedRouter from "./ProtectedRouter";
import Navbar from "../components/Navbar";
import LogOut from "../pages/LogOut";
import Chat from "../pages/Chat";


const HeaderLayout = () => (
    <>
        <header>
            <Navbar/>
        </header>
        <Outlet/>
    </>
);


export const BrowserRouter = createBrowserRouter(
    [
        {
            element: <HeaderLayout/>,
            children: [
                {
                    path: "/logout",
                    element: <LogOut/>,
                    errorElement: <ErrorPage/>,
                },
                {
                    path: "/login",
                    element: <LogInPage/>,
                    errorElement: <ErrorPage/>,
                },
                {
                    path: "/",
                    element: <ProtectedRouter children={<Home/>}/>,
                    errorElement: <ErrorPage/>,
                },
                {
                    path: "/tickets",
                    element: <ProtectedRouter children={<Tickets/>}/>,
                    errorElement: <ErrorPage/>,
                },
                {
                    path: "/chat",
                    element: <ProtectedRouter children={<Chat/>}/>,
                    errorElement: <ErrorPage/>,
                },
            ],
        },
    ]
);