import React from 'react';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container'

import useStyles from "../../../assets/constants/styles";
import DayLogo from "../../../assets/img/logo.png";

const AuthHeader = () => {
    const styles = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const mode = theme.palette.mode;
    const matches = useMediaQuery('(min-width:800px)');

    return (
        <Box sx={{ flexGrow: 1 }} className={styles.appbar}>
            <AppBar position="static" className={top ? "top header" : "header"}>
                {
                    matches ?
                        <Container className="container">
                            <Box sx={{ flexGrow: 1 }} className="logo-bar">
                                <img src={mode === "light" ? DayLogo : DayLogo} className="logo" onClick={() => history.push("/")} />
                            </Box>
                        </Container>
                        :
                        <Toolbar>
                        </Toolbar>
                }
            </AppBar>
        </Box>
    );
}

export default AuthHeader;