import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useStyles from "../../assets/constants/styles";
import Background from "../../assets/img/background/auth-bg1.png"
import Country from "./country"
import CountrySelect from "./countrySelect"
import MainRegister from "./mainRegister"
import Header from "../../components/layout/auth/Header";
import { countries } from "../../config/index"

const Register = () => {

    const styles = useStyles();
    const [page, setPage] = React.useState(1)
    const [values, setValues] = React.useState({
        country: countries[0],
        email: "",
        email_code: "",
        password: "",
        repassword: "",
        invite_code: "",
        isChecked: true
    });

    const handleChange = (key, value) => {
        setValues({ ...values, [key]: value });
    };

    return (
        <Box className={page !== 3 ? styles.AppContainer1 : styles.AppContainer}>
            <Header />
            <Box className={styles.Auth}>
                <img className="home-bg" src={Background} alt="" />
                <Box>
                    <Card sx={{ maxWidth: 400 }}>
                        {
                            page === 1 ?
                                <CardContent className="card-content">
                                    <Country values={values} setPage={setPage} />
                                    <Button fullWidth variant="contained" className="login-btn" onClick={() => setPage(3)}>Confirm</Button>
                                </CardContent>
                                :
                                <>
                                    {
                                        page === 2 ?
                                            <CardContent className="card-content">
                                                <CountrySelect handleChange={handleChange} setPage={setPage} />
                                            </CardContent>
                                            :
                                            <MainRegister handleChange={handleChange} values={values} />
                                    }
                                </>
                        }
                    </Card>
                    <Typography className="copyright">{"Copyright © 2021 All rights reserved."}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Register;