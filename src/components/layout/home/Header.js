import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useTheme from '@mui/material/styles/useTheme';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useStyles from "../../../assets/constants/styles";
import { Currencys, Languages } from "../../../config";
import { Button } from '@mui/material';
import ReactCountryFlag from 'react-country-flag'
import Container from '@mui/material/Container'

import DayLogo from "../../../assets/img/logo.png";
import { ReactComponent as ExchangeIcon } from "../../../assets/img/header-menu/exchange.svg";
import { ReactComponent as InstitutionalIcon } from "../../../assets/img/header-menu/institutional.svg";
import { ReactComponent as SwapIcon } from "../../../assets/img/header-menu/swap.svg";
import { ReactComponent as AcademyIcon } from "../../../assets/img/header-menu/academy.svg";
import { ReactComponent as ChairityIcon } from "../../../assets/img/header-menu/chairity.svg";
import { ReactComponent as LaunchpadIcon } from "../../../assets/img/header-menu/launchpad.svg";

import { ReactComponent as PlusIcon } from "../../../assets/img/header-menu/plus.svg";

import { ReactComponent as CreditDebitIcon } from "../../../assets/img/crypto-menu/credit-debit.svg";
import { ReactComponent as P2PTradingIcon } from "../../../assets/img/crypto-menu/p2p-trading.svg";
import { ReactComponent as DashBalanceIcon } from "../../../assets/img/crypto-menu/dash-balance.svg";
import { useHistory } from 'react-router';

const HomeHeader = () => {
    const styles = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const mode = theme.palette.mode;
    const matches = useMediaQuery('(min-width:800px)');

    // const { setMode } = React.useContext(ThemeModeContext)

    const [top, setTop] = useState(false)

    const [mainMenu, setMainMenu] = React.useState(null);
    const mainMenuBool = Boolean(mainMenu);
    const [buyCryptoMenu, setBuyCryptoMenu] = React.useState(null);
    const buyCryptoMenuBool = Boolean(buyCryptoMenu);
    const [currencyMenu, setCurrencyMenu] = React.useState(null);
    const currencyMenuBool = Boolean(currencyMenu);
    const [currentCurrencyItem, setCurrentCurrencyItem] = React.useState(Currencys[0]);
    const [language, setLanguage] = React.useState(null);
    const languagemenu = Boolean(language);
    const [currentLanguage, setCurrentLanguage] = React.useState(Languages[0])

    const _handleMainMenu = (event) => {
        setMainMenu(event.currentTarget);
    };

    const _handleCloseMainMenu = () => {
        setMainMenu(null);
    };

    const _handleBuyCryptoMenu = (event) => {
        setBuyCryptoMenu(event.currentTarget);
    };

    const _handleCloseCryptoMenu = () => {
        setBuyCryptoMenu(null);
    };

    const _handleCurrencyMenu = (event) => {
        setCurrencyMenu(event.currentTarget);
    };

    const _handleCloseCurrencyMenu = (e, s) => {
        if (s === true) {
            setCurrentCurrencyItem(e);
        };
        setCurrencyMenu(null);
    };

    const _handleLanguage = (event) => {
        setLanguage(event.currentTarget);
    };

    const _handleCloseLanguage = (e, s) => {
        if (s === true) {
            setCurrentLanguage(e);
        };
        setLanguage(null);
    };

    const changeNavbarColor = () => {
        if (window.scrollY >= 1) {
            setTop(true);
        } else {
            setTop(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    useEffect(() => {
        setMainMenu(null)
        setCurrencyMenu(null)
        setBuyCryptoMenu(null)
    }, [matches])

    return (
        <Box sx={{ flexGrow: 1 }} className={styles.appbar}>
            <AppBar position="static" className={top ? "top header" : "header"}>
                {
                    matches ?
                        <Container className="container">
                            <Box sx={{ flexGrow: 1 }} className="logo-bar">
                                <img src={mode === "light" ? DayLogo : DayLogo} className="logo" onClick={() => history.push("/")} />
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    id="demo-customized-button"
                                    aria-controls="demo-customized-menu"
                                    aria-haspopup="true"
                                    aria-expanded={mainMenuBool ? 'true' : undefined}
                                    variant="text"
                                    onClick={_handleMainMenu}
                                    className="headerbar-drop-button"
                                >
                                    <AppsIcon />
                                </IconButton>
                                <Menu
                                    elevation={0}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                                    id="demo-customized-menu"
                                    MenuListProps={{ 'aria-labelledby': 'demo-customized-button', }}
                                    className={styles.CustomizeMenu}
                                    anchorEl={mainMenu}
                                    open={mainMenuBool}
                                    onClose={_handleCloseMainMenu}
                                >
                                    <Box className="menu-item-header">
                                        <Box>
                                            <MenuItem className="menu-item" disableRipple onClick={_handleCloseMainMenu}>
                                                <ExchangeIcon className="icon" />Exchange
                                            </MenuItem>
                                            <MenuItem className="menu-item" disableRipple onClick={_handleCloseMainMenu}>
                                                <InstitutionalIcon className="icon" />Institutional Services
                                            </MenuItem>
                                            <MenuItem className="menu-item" disableRipple onClick={_handleCloseMainMenu}>
                                                <SwapIcon className="icon" />Swap
                                            </MenuItem>
                                        </Box>
                                        <Box>
                                            <MenuItem className="menu-item" disableRipple onClick={_handleCloseMainMenu}>
                                                <AcademyIcon className="icon" />Academy
                                            </MenuItem>
                                            <MenuItem className="menu-item" disableRipple onClick={_handleCloseMainMenu}>
                                                <ChairityIcon className="icon" />Chairity
                                            </MenuItem>
                                            <MenuItem className="menu-item" disableRipple onClick={_handleCloseMainMenu}>
                                                <LaunchpadIcon className="icon" />Launchpad
                                            </MenuItem>
                                        </Box>
                                    </Box>
                                </Menu>
                            </Box>

                            <Box className="button-list">
                                {/* crypto list */}
                                <Button
                                    id="demo-customized-button"
                                    aria-controls="demo-customized-menu"
                                    aria-haspopup="true"
                                    aria-expanded={buyCryptoMenuBool ? 'true' : undefined}
                                    variant="text"
                                    onClick={_handleBuyCryptoMenu}
                                    endIcon={<ArrowDropDownIcon fontSize="small" />}
                                    className="headerbar-drop-button"
                                >
                                    <span>Buy Crypto</span>
                                </Button>
                                <Menu
                                    elevation={0}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                                    className={styles.CustomizeMenu}
                                    id="demo-customized-menu"
                                    MenuListProps={{ 'aria-labelledby': 'demo-customized-button', }}
                                    anchorEl={buyCryptoMenu}
                                    open={buyCryptoMenuBool}
                                    onClose={_handleCloseCryptoMenu}
                                >
                                    <Box className="crypto-item-header">
                                        <p>Pay with</p>
                                        <MenuItem className="crypto-item" disableRipple onClick={_handleCloseCryptoMenu}>
                                            <CreditDebitIcon className="icon" />
                                            <Box className="letter-head">
                                                <span className="main-letter">Credit/Debit Card</span>
                                                <span className="second">Buy crypto via card</span>
                                            </Box>                                        
                                        </MenuItem>
                                        <MenuItem className="crypto-item" disableRipple onClick={_handleCloseCryptoMenu}>
                                            <P2PTradingIcon className="icon" />
                                            <Box className="letter-head">
                                                <span className="main-letter">P2P Trading</span>
                                                <span className="second">Bank transfer and 100+ options</span>
                                            </Box>                                        
                                        </MenuItem>
                                        <MenuItem className="crypto-item" disableRipple onClick={_handleCloseCryptoMenu}>
                                            <DashBalanceIcon className="icon" />
                                            <Box className="letter-head">
                                                <span className="main-letter">Cash Balance</span>
                                                <span className="second">Buy crypto with your EUR balance</span>
                                            </Box>                                        
                                        </MenuItem>
                                    </Box>
                                </Menu>

                                {/* etc buttons */}
                                <Button variant="text" className="headerbar-drop-button" >
                                    <span>Markets</span>
                                </Button>
                                <Button variant="text" className="headerbar-drop-button" >
                                    <span>Trade</span>
                                </Button>
                                <Box className="stack"></Box>
                                <Button variant="text" className="headerbar-drop-button" onClick={() => history.push("/login")}>
                                    <span>Login</span>
                                </Button>
                                <Button variant="text" className="headerbar-drop-button register" onClick={() => history.push("/register")}>
                                    <p>Register</p>
                                </Button>
                                <Box className="stack"></Box>

                                {/* Language button */}
                                <Button
                                    id="demo-customized-button"
                                    aria-controls="demo-customized-menu"
                                    aria-haspopup="true"
                                    aria-expanded={languagemenu ? 'true' : undefined}
                                    variant="text"
                                    onClick={_handleLanguage}
                                    className="headerbar-drop-button register"
                                >
                                    <p>
                                        <span>{currentLanguage.name}</span>
                                        <ReactCountryFlag
                                            className='country-flag flag-icon'
                                            countryCode={'us'}
                                            svg
                                        />
                                    </p>
                                </Button>
                                <Menu
                                    elevation={0}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                                    className={styles.CustomizeMenu}
                                    id="demo-customized-menu"
                                    MenuListProps={{ 'aria-labelledby': 'demo-customized-button', }}
                                    anchorEl={language}
                                    open={languagemenu}
                                    onClose={_handleCloseLanguage}
                                >
                                    {
                                        Languages.map((item, key) => (
                                            <MenuItem key={key} onClick={() => _handleCloseLanguage(item, true)} disableRipple>
                                                <span>{item.name}</span>
                                                <ReactCountryFlag
                                                    className='country-flag flag-icon'
                                                    countryCode={item.lan}
                                                    svg
                                                />
                                            </MenuItem>
                                        ))
                                    }
                                </Menu>

                                <Button
                                    id="demo-customized-button"
                                    aria-controls="demo-customized-menu"
                                    aria-haspopup="true"
                                    aria-expanded={currencyMenuBool ? 'true' : undefined}
                                    variant="text"
                                    onClick={_handleCurrencyMenu}
                                    className="headerbar-drop-button register">
                                    <p>{currentCurrencyItem}</p>
                                </Button>
                                <Menu
                                    elevation={0}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                                    className={styles.CustomizeMenu}
                                    id="demo-customized-menu"
                                    MenuListProps={{ 'aria-labelledby': 'demo-customized-button', }}
                                    anchorEl={currencyMenu}
                                    open={currencyMenuBool}
                                    onClose={_handleCloseCurrencyMenu}
                                >
                                    {
                                        Currencys.map((item, key) => (
                                            <MenuItem key={key} onClick={() => _handleCloseCurrencyMenu(item, true)} disableRipple>
                                                {item}
                                            </MenuItem>
                                        ))
                                    }
                                </Menu>
                                <Button className="headerbar-drop-button register">
                                    <p className="connect">
                                        <PlusIcon />
                                        CONNECT
                                    </p>
                                </Button>
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

export default HomeHeader;