import './Adlogin.css'
import {useNavigate} from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import {Alert, AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Skeleton, Snackbar, Typography, InputAdornment, TextField } from "@mui/material"
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import CloseIcon from '@mui/icons-material/Close';

function Adlogin(){

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [pass , setPass] = useState("");
    const [passError, setPassError] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();

    const emailRegex = /^[\w.]+@[a-zA-Z]+\.[a-z]{2,5}$/;

    const handleClick =() => {
        if(email.length == 0 && pass.length == 0){
            setEmailError(true);
            setPassError(true);
        }else if(email.length == 0  || !emailRegex.test(email)){
            setEmailError(true);
        }else if(pass.length == 0){
            setEmailError(false);
            setPassError(true);
        }else{
            setEmailError(false);
            setPassError(false);
            console.log("Printed Successfully");

            navigate("/admin-home");
        }
    }


    return(
        <>
        <main>
            <AppBar sx={{ backgroundColor:"black", display: "flex", flexDirection: "row", alignItems: "center", p: 1 }}>
                <Typography sx={{flexGrow :1 }}  fontSize={{xs: 17, sm: 20, md: 25 }} variant='h4' component="p" style={{margin: "10px"}}>User Saved Buses</Typography>
                <Button fontSize={{xs: 14, sm: 20, md: 25 }} style={{color: "whitesmoke", marginRight : "40px"}} onClick={() => {navigate("/")}} startIcon={<ReplyAllIcon />}>Back</Button>
            </AppBar>
            <div className="adlcontainer">
                <form>
                    <div className="adlheader">
                        <h4>Admin Login</h4>
                        <IconButton onClick={() => {navigate("/")}} top-0 end-0 aria-label="delete" size="large" style={{ position: "absolute", top: 0, right: 0 }}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    </div>

                    <TextField fullWidth focused required type='email' label="Email" value={email} error={emailError} color='secondary' 
                        sx={{margin:"10px"}} name="mail" placeholder='name@gmail.com' onChange={(e) => setEmail(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> <EmailIcon /> </InputAdornment>), }} helperText={emailError ? "Enter a valid email address" : ""} />

                    <TextField fullWidth focused required type={showPass ? "text" : "password"} label="Password " value={pass} error={passError} color='secondary'
                        sx={{margin:"10px"}} name="pass"  placeholder='password' onChange={(e) => setPass(e.target.value)} InputProps={{endAdornment: (
                        <InputAdornment position="end"> 
                            <IconButton onClick={() => setShowPass(!showPass)} edge="end">
                                {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>), }}/>

                    <Button onClick={handleClick} sx={{width: "50%", padding: "10px", margin: "10px"}} style={{backgroundColor: "#fbd0d9",color:"crimson"}} fullWidth variant="contained">Login</Button>
                </form>
            </div>
        </main>
        </>
    )
}

export default Adlogin