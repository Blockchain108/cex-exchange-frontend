import * as React from 'react';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MailOutline from '@mui/icons-material/MailOutline';
import Lock from '@mui/icons-material/Lock';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Security from '@mui/icons-material/Security';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const MainRegister = ({ values, handleChange}) => {
    const history = useHistory()
    const [passwordKey, setPasswordKey] = React.useState({
        showPassword: false,
        showRePassword: false,
    });
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handlePasswordKey = (key, value) => {
        setPasswordKey({ ...passwordKey, [key]: value });
    };

    return (
        <CardContent className="card-content text-center">
            <Typography className="header" gutterBottom>
                Create MGL Account
            </Typography>
            <Box className="custom-input">
                <IconButton aria-label="menu">
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
                <IconButton aria-label="menu">
                    <Security />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="E-mail verification code"
                    inputProps={{ 'aria-label': 'E-mail verification code' }}
                    onChange={(e) => handleChange("email_code", e.target.value)}
                />
                <IconButton>
                    <InputAdornment position="start">
                        <Button variant="contained" className="mail-send">Send</Button>
                    </InputAdornment>
                </IconButton>
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
                    type={passwordKey.showPassword ? "text" : "password"}
                />
                <IconButton type="submit" onClick={() => handlePasswordKey("showPassword", !passwordKey.showPassword)} aria-label="search">
                    {passwordKey.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </Box>
            <Box className="custom-input mt-1">
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <Lock />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter password again"
                    inputProps={{ 'aria-label': 'Enter password again' }}
                    onChange={(e) => handleChange("repassword", e.target.value)}
                    type={passwordKey.showRePassword ? "text" : "password"}
                />
                <IconButton type="submit" onClick={() => handlePasswordKey("showRePassword", !passwordKey.showRePassword)} aria-label="search">
                    {passwordKey.showRePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </Box>
            <Box className="custom-input mt-1">
                <IconButton aria-label="menu">
                    <PeopleAlt />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Invite Code (Optional)"
                    inputProps={{ 'aria-label': 'Invite Code (Optional)' }}
                    onChange={(e) => handleChange("invite_code", e.target.value)}
                />
            </Box>
            <Box className="terms-content" onClick={() => handleChange("isChecked", !values.isChecked)}>
                <Checkbox className="checkbox" {...label} checked={values.isChecked} />
                <Typography className="letter">{"I have read and agree to MGL's Terms of Service"}</Typography>
            </Box>
            <Button fullWidth variant="contained" className="login-btn">Create Account</Button>
            <Typography className="already">{"Already registered ?"}<span onClick={()=>history.push("/login")}>Log in</span></Typography>
        </CardContent>
    )
}

export default MainRegister;