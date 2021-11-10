import React from "react";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { ReactComponent as SupportIcon } from "../../assets/img/touch-menu/support.svg"
import { ReactComponent as BloggIcon } from "../../assets/img/touch-menu/blog.svg"
import { ReactComponent as Community } from "../../assets/img/touch-menu/community.svg"

const TouchComponent = () => {

    return (
        <Box className="market-trend">
            <Container>
                <Typography className="main-letter">Get in touch. Stay in touch.</Typography>
                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <Box className="touch-item">
                            <SupportIcon />
                            <Typography className="touch-name">Support</Typography>
                            <Typography className="touch-explo">
                                Got a problem? Just get in touch.
                                Our support team is available 24/7
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box className="touch-item">
                            <BloggIcon />
                            <Typography className="touch-name">Blog</Typography>
                            <Typography className="touch-explo">
                                {"News and updates from the world's leading cryptocurrency exchange."}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box className="touch-item">
                            <Community />
                            <Typography className="touch-name">Community</Typography>
                            <Typography className="touch-explo">
                                MGL is global. Join the discussion in our worldwide communities.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default TouchComponent;