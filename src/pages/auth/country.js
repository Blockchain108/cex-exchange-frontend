import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

const CountryRegister = ({ values, setPage }) => {

    console.log(values, 'values')

    return (
        <Box>
            <Typography className="where" gutterBottom>
                Where do you live
            </Typography>
            <Typography className="where-explo" gutterBottom>
                Before we start please enter your currnet location of residence
            </Typography>

            <Typography className="residence" gutterBottom>
                Country/Area of Residence
            </Typography>

            <Box className="custom-input current-country" onClick={() => setPage(2)}>
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${values.country.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${values.country.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    value={values.country.label}
                />
            </Box>
            <Typography className="where-explo mt-1" gutterBottom>
                The registration process is subject to change based on the information you provide.
            </Typography>
        </Box>
    )
}



export default CountryRegister;