import React from "react";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import useStyles from "../../assets/constants/styles";
import { Button, Typography } from "@mui/material";
import MarketTrend from "./marketTrend"
import TouchComponent from "./touchComponent"
import StarTradingNow from "./startTradingNow"
import Footer from "./footer"
import Background from "../../assets/img/background/background.png"
import { useHistory } from "react-router";

const Home = () => {
    const styles = useStyles()
    const history = useHistory()
    return (
        <Box className={styles.Home}>
            <Box>
                <Container>
                    <img className="home-bg" src={Background} alt="" />
                    <Box>
                        <Typography className="main-letter">Buy & Sell Crypto in minutes</Typography>
                    </Box>
                    <Button className="register-btn" onClick={()=>history.push("/register")} variant="contained">Register Now</Button>
                    <Box className="crypto-item-list">
                        <Box className="crypto-item">
                            <Box className="line1">
                                <Typography className="letter1">BNB/BUSD</Typography>
                                <Typography className="letter2">1.58%</Typography>
                            </Box>
                            <Typography className="letter3">553.9</Typography>
                            <Typography className="letter4">$553.46</Typography>
                        </Box>
                        <Box className="crypto-item">
                            <Box className="line1">
                                <Typography className="letter1">BNB/BUSD</Typography>
                                <Typography className="letter2-1">1.58%</Typography>
                            </Box>
                            <Typography className="letter3">553.9</Typography>
                            <Typography className="letter4">$553.46</Typography>
                        </Box>
                        <Box className="crypto-item">
                            <Box className="line1">
                                <Typography className="letter1">BNB/BUSD</Typography>
                                <Typography className="letter2">1.58%</Typography>
                            </Box>
                            <Typography className="letter3">553.9</Typography>
                            <Typography className="letter4">$553.46</Typography>
                        </Box>
                        <Box className="crypto-item">
                            <Box className="line1">
                                <Typography className="letter1">BNB/BUSD</Typography>
                                <Typography className="letter2-1">1.58%</Typography>
                            </Box>
                            <Typography className="letter3">553.9</Typography>
                            <Typography className="letter4">$553.46</Typography>
                        </Box>
                        <Box className="crypto-item">
                            <Box className="line1">
                                <Typography className="letter1">BNB/BUSD</Typography>
                                <Typography className="letter2">1.58%</Typography>
                            </Box>
                            <Typography className="letter3">553.9</Typography>
                            <Typography className="letter4">$553.46</Typography>
                        </Box>
                        <Box className="crypto-item">
                            <Box className="line1">
                                <Typography className="letter1">BNB/BUSD</Typography>
                                <Typography className="letter2">1.58%</Typography>
                            </Box>
                            <Typography className="letter3">553.9</Typography>
                            <Typography className="letter4">$553.46</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <MarketTrend />
            <TouchComponent />
            <StarTradingNow />
            <Footer /> 
        </Box>
    )
}

export default Home;