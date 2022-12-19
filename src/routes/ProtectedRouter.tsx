import LogInPage from "../pages/Login";


interface IProtectedRouterProps {
    children: JSX.Element
}

function ProtectedRouter({children}: IProtectedRouterProps) {
    const loggedIn: string = localStorage.getItem('loggedIn') || "false";
    if (loggedIn === "false") {
        return <LogInPage/>
    }
    if (loggedIn === "true") {
        return children
    } else {
        return <>{"ERROOR"}</>
    }

}

export default ProtectedRouter;