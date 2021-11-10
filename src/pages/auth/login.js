import * as React from 'react';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MailOutline from '@mui/icons-material/MailOutline';
import Lock from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputBase from '@mui/material/InputBase';
import useStyles from "../../assets/constants/styles";
import Background from "../../assets/img/background/auth-bg1.png"
import Header from "../../components/layout/auth/Header";

const Login = () => {
    const styles = useStyles();
    const history = useHistory()
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        isChecked: true,
        showPassword: false,
    });
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleChange = (key, value) => {
        setValues({ ...values, [key]: value });
    };

    return (
        <Box className={styles.AppContainer}>
            <Header />
            <Box className={styles.Auth}>
                <img className="home-bg" src={Background} alt="" />
                <Box>
                    <Card>
                        <CardContent className="card-content text-center">
                            <Typography className="header" gutterBottom>
                                Log In
                            </Typography>
                            <Box className="custom-input">
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <MailOutline />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="E-mail address"
                                    inputProps={{ 'aria-label': 'E-mail address' }}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                />
                            </Box>
                            <Box className="custom-input mt-1">
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <Lock />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Enter password here"
                                    inputProps={{ 'aria-label': 'Enter password here' }}
                                    onChange={(e) => handleChange("password", e.target.value)}
                                    type={values.showPassword ? "text": "password"}
                                />
                                <IconButton type="submit" onClick={() => handleChange("showPassword", !values.showPassword)} aria-label="search">
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </Box>
                            <Box className="terms-content" onClick={() => handleChange('isChecked', !values.isChecked)}>
                                <Checkbox
                                    {...label}
                                    className="checkbox"
                                    checked={values.isChecked}
                                />
                                <Typography className="letter">{"I have read and agree to MGL's Terms of Service"}</Typography>
                            </Box>
                            <Button fullWidth variant="contained" className="login-btn">Log in</Button>
                            <Box className="footer-content">
                                <Typography className="footer-letter">{"Forgot password ?"}</Typography>
                                <Typography onClick={() => history.push("/register")} className="footer-letter">{"Register now"}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Typography className="copyright">{"Copyright © 2021 All rights reserved."}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Login;