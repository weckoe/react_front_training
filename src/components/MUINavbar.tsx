import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useLoggedIn} from "../hooks/useLoggedIn";

export default function ButtonAppBar() {
    const {loggedIn} = useTypedSelector(state => state.users)
    const {setLoggedIn} = useActions()
    useLoggedIn(setLoggedIn, loggedIn)
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to="/tickets"> Tickets </Link>
                        <Link to="/chat"> Chat </Link>
                    </Typography>
                    <Button color="inherit">
                        {loggedIn
                            ? <Link to="/logout"> Logout </Link>
                            : <Link to="/login"> Login </Link>
                        }
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}