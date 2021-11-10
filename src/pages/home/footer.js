import React from "react";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {

    return (
        <Box className="market-footer">
            <Container>
                <Box className="market-footer-content">
                    <Typography>Copyright©2021 All rights reserved.</Typography>
                    <Box className="footer-list">
                        <Typography>Buy Crypto</Typography>
                        <Typography>Markets</Typography>
                        <Typography>Trade</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;