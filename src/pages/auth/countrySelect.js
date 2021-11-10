import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Close from '@mui/icons-material/Close';
import Search from '@mui/icons-material/Search';
import { countries } from "../../config/index"

const CountrySelector = ({ handleChange, setPage }) => {

    const [search, setSearch] = React.useState('')
    const selectCountry = (country) => {
        setPage(1)
        handleChange("country", country)
    }

    return (
        <Box>
            <Box className="d-flex justify-between">
                <Typography className="residence" gutterBottom>
                    Country/Area of Residence
                </Typography>
                <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={() => setPage(1)}>
                    <Close />
                </IconButton>
            </Box>
            <Box className="custom-input select-input">
                <IconButton aria-label="menu">
                    <Search />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>
            <Box className="country-select">
                {
                    countries.map((item, key) => (
                        <Box key={key} className="d-flex current-country item-country" onClick={() => selectCountry(item)}>
                            <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <img
                                    loading="lazy"
                                    width="20"
                                    src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
                                    alt=""
                                />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                value={item.label}
                            />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}



export default CountrySelector;