import React from "react";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { ReactComponent as BitCoinIcon } from "../../assets/img/token-list/bitcoin.svg"
import { ReactComponent as EthereumIcon } from "../../assets/img/token-list/ethereum.svg"
import { ReactComponent as RippleIcon } from "../../assets/img/token-list/ripple.svg"
import { ReactComponent as LiteCoinIcon } from "../../assets/img/token-list/litecoin.svg"

import DailyChart1 from "../../assets/img/graph/dailybox.png"
import DailyChart2 from "../../assets/img/graph/dailychart.png"

const MarketTrend = () => {

    return (
        <Box className="market-trend">
            <Container>
                <Typography className="main-letter">Market trend</Typography>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow className="tbl-row">
                                <TableCell className="th-cell">Name</TableCell>
                                <TableCell className="th-cell" align="center">Last Price</TableCell>
                                <TableCell className="th-cell" align="center">24h Change</TableCell>
                                <TableCell className="th-cell" align="center">Markets</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className="tbl-row c-row">
                                <TableCell className="cell">
                                    <Box className="d-flex">
                                        <BitCoinIcon /><span>Bitcoin</span>
                                    </Box>
                                </TableCell>
                                <TableCell className="cell" align="center"><span>$11,911.48</span></TableCell>
                                <TableCell className="cell" align="center"><span className="color1">2.54%</span></TableCell>
                                <TableCell className="cell" align="center">
                                    <img src={DailyChart1} alt="" />
                                </TableCell>
                            </TableRow>
                            <TableRow className="tbl-row c-row">
                                <TableCell className="cell" align="center">
                                    <Box className="d-flex">
                                        <EthereumIcon /><span>Ethereum</span>
                                    </Box>
                                </TableCell>
                                <TableCell className="cell" align="center"><span>$11,911.48</span></TableCell>
                                <TableCell className="cell" align="center"><span className="color1">2.54%</span></TableCell>
                                <TableCell className="cell" align="center">
                                    <img src={DailyChart1} alt="" />
                                </TableCell>
                            </TableRow>
                            <TableRow className="tbl-row c-row">
                                <TableCell className="cell" align="center">
                                    <Box className="d-flex">
                                        <RippleIcon /><span>Ripple</span>
                                    </Box>
                                </TableCell>
                                <TableCell className="cell" align="center"><span>$11,911.48</span></TableCell>
                                <TableCell className="cell" align="center"><span className="color1">2.54%</span></TableCell>
                                <TableCell className="cell" align="center">
                                    <img src={DailyChart1} alt="" />
                                </TableCell>
                            </TableRow>
                            <TableRow className="tbl-row c-row">
                                <TableCell className="cell" align="center">
                                    <Box className="d-flex">
                                        <LiteCoinIcon /><span>Litecoin</span>
                                    </Box>
                                </TableCell>
                                <TableCell className="cell" align="center"><span>$11,911.48</span></TableCell>
                                <TableCell className="cell" align="center"><span className="color2">2.54%</span></TableCell>
                                <TableCell className="cell" align="center">
                                    <img src={DailyChart2} alt="" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    )
}

export default MarketTrend;