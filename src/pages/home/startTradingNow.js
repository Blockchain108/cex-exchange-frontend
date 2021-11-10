import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

const StartTrading = () => {

    return (
        <Box className="start-trading">
            <Typography className="main-letter">Get in touch. Stay in touch.</Typography>
            <Button variant="container" className="register">Register Now</Button>
            <Button variant="container" className="trade">Trade Now</Button>
        </Box>
    )
}

export default StartTrading;