import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import './Register.css'
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Register(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [mob, setMob] = useState("");
    const [pass , setPass] = useState("");
    const [cpass, setCPass] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [mobError, setMobError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [cpassError, setCPassError] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [cshowPass, setCShowPass] = useState(false);

    const navigate = useNavigate();
    

    const emailRegex = /^[\w.]+@[a-zA-Z]+\.[a-z]{2,5}$/;        //email validation  
    const re = /^[A-Za-z\s]*$/;                                 //Username validation that allows only alphabets   
    const ree = /^[6-9]\d{9}$/;                                  //mobile validation



    const handleSubmit =() => {
        if(name.length == 0 && email.length == 0 && mob.length == 0 && pass.length == 0 && cpass.length == 0){
            setNameError(true);
            setEmailError(true);
            setMobError(true);
            setPassError(true);
            setCPassError(true);
        }else if(name.length == 0 || !re.test(name)){
            setNameError(true);
        }else if(email.length == 0 || !emailRegex.test(email)){
            setNameError(false);
            setEmailError(true);
        }else if(mob.length == 0 || !ree.test(mob) ){
            setNameError(false);
            setEmailError(false);
            setMobError(true);
        }else if(pass.length == 0){
            setNameError(false);
            setEmailError(false);
            setMobError(false);
            setPassError(true);
        }else if(cpass.length == 0){
            setNameError(false);
            setEmailError(false);
            setMobError(false);
            setPassError(false);
            setCPassError(true);
        }else if(pass != cpass){
            setNameError(false);
            setEmailError(false);
            setMobError(false);
            setPassError(false);
            setCPassError(true);
        }else{
            setNameError(false);
            setEmailError(false);
            setMobError(false);
            setPassError(false);
            setCPassError(false);
            console.log("Printed Successfully");

            navigate("/login");
        }
    }
    

    return(
        <>
            <main>
                <div className="regcontainer">
                    <form>
                        <div className="adlheader">
                            <h4>User Register</h4>
                            <IconButton onClick={() => {navigate("/")}} top-0 end-0 aria-label="delete" size="large" style={{ position: "absolute", top: 0, right: 0 }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                            
                        </div>
                        <TextField fullWidth focused required type='name' label="Username" value={name} error={nameError} color='secondary' 
                        sx={{margin:"10px"}} name="Uname" placeholder='Username' onChange={(e) => setName(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> <AccountCircleIcon /> </InputAdornment>), }} helperText= { nameError ? "Enter the Valid name" : ""}/>


                        <TextField fullWidth focused required type='email' label="Email" value={email} error={emailError} color='secondary' 
                        sx={{margin:"10px"}} name="mail" placeholder='name@gmail.com' onChange={(e) => setEmail(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> <EmailIcon /> </InputAdornment>),  maxLength: 10 }}  helperText={emailError ? "Enter a valid email address" : ""} />


                        <TextField fullWidth focused required type='tel' label="Mobile Number" value={mob} error={mobError} color='secondary'
                         sx={{margin:"10px"}} name="mobile" placeholder='+91 ' onChange={(e) => setMob(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> <SmartphoneIcon /> </InputAdornment>), }} helperText={mobError ? " Mobile must contains 10 Number(0-9) and Number must starts with ('6','7','8','9') " : ""} />


                        <TextField fullWidth focused required type={showPass ? "text" : "password"} label="Password " value={pass} error={passError} color='secondary'
                         sx={{margin:"10px"}} name="pass"  placeholder='password' onChange={(e) => setPass(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> 
                                <IconButton onClick={() => setShowPass(!showPass)} edge="end">
                                    {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                             </InputAdornment>), }}  />



                        <TextField fullWidth focused required type={cshowPass ? "text" : "password"} label=" Confirm Password " value={cpass} error={cpassError} 
                        color='secondary' sx={{margin:"10px"}} name="cpass"  placeholder='Confirm Password' onChange={(e) => setCPass(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> 
                                <IconButton onClick={() => setCShowPass(!cshowPass)} edge="end">
                                    {cshowPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                             </InputAdornment>), }}  helperText={cpassError ? "Password Do not Match " : ""} />


                        <Button onClick={handleSubmit} sx={{width: "50%", padding: "10px", margin: "10px"}} style={{backgroundColor: "#fbd0d9",color:"crimson"}} fullWidth variant="contained">Register</Button>
                        <div className="lfoot">
                            <p>dont have an account? <a href="/login">Login Now</a></p>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register