import { Button, InputAdornment, MenuItem, TextField, Typography } from "@mui/material"
import Navbar from "../navbar/Navbar"
import './Profile.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";

function Profile(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mob, setMob] = useState("");
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [gender, setGender] = useState("");

    return(
        <>
            <Navbar />
            <div className="profcontainer">
                <div className="profcontent">
                    <h4>User Profile</h4>
                    <div className="profile">
                        <TextField fullWidth focused required type='name' label="Username" value={name} style={{fontPalette : "light"}}
                            sx={{margin:"10px", "& .MuiInputBase-input": { color: "white" },
                            "& .MuiInputLabel-root": { color: "white" },
                            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                            "& .MuiSvgIcon-root": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": { borderColor: "white" }, }}} name="Uname" placeholder='Username' onChange={(e) => setName(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> <AccountCircleIcon /> </InputAdornment>), }}/>

                        <TextField fullWidth focused required type='email' label="Email" value={email} 
                        sx={{margin:"10px" , "& .MuiInputBase-input": { color: "white" },
                            "& .MuiInputLabel-root": { color: "white" },
                            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                            "& .MuiSvgIcon-root": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": { borderColor: "white" }, }}} name="mail" placeholder='name@gmail.com' onChange={(e) => setEmail(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> <EmailIcon /> </InputAdornment>),  maxLength: 10 }}/>

                        <TextField fullWidth focused required type='tel' label="Mobile Number" value={mob}
                         sx={{margin:"10px" , "& .MuiInputBase-input": { color: "white" },
                            "& .MuiInputLabel-root": { color: "white" },
                            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                            "& .MuiSvgIcon-root": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": { borderColor: "white" }, }}} name="mobile" placeholder='+91 ' onChange={(e) => setMob(e.target.value)} InputProps={{endAdornment: (
                            <InputAdornment position="end"> <SmartphoneIcon /> </InputAdornment>), }} />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Date Picker " format="DD/MM/YYYY" name="date" value={selectedDate}
                            onChange={(newDate) => setSelectedDate(newDate)} 
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    required: true,
                                    sx : {
                                        margin: "10px", "& .MuiInputBase-input": { color: "white" },
                                        "& .MuiSvgIcon-root": { color: "white" },
                                        "& .MuiInputLabel-root": { color: "white" },
                                        "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": { borderColor: "white" },
                                            "&:hover fieldset": { borderColor: "white" }, 
                                            "&.Mui-focused fieldset": { borderColor: "white" },
                                        }
                                    }
                                },
                            }}/>
                        </LocalizationProvider>

                        
                        <TextField fullWidth focused required select label="Gender" value={gender}
                        onChange={(e) => setGender(e.target.value)} sx={{margin:"10px" , "& .MuiInputBase-input": { color: "white" },
                            "& .MuiInputLabel-root": { color: "white" },
                            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                            "& .MuiSvgIcon-root": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": { borderColor: "white" }, }}} > 
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </TextField>

                        <Button variant="contained"> Edit </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile


{/*
    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: "white" },
                                        "&:hover fieldset": { borderColor: "white" },
                                        "&.Mui-focused fieldset": { borderColor: "white" },
                                    },
    
    <TextField fullWidth focused required type='date' label="Date of Birth" value={date}
    sx={{margin:"10px" , "& .MuiInputBase-input": { color: "white", "&::-webkit-datetime-edit": { color: "white" },
    "&::-webkit-datetime-edit-year-field": { color: "white" },
    "&::-webkit-datetime-edit-month-field": { color: "white" },
    "&::-webkit-datetime-edit-day-field": { color: "white" },
    "&::-webkit-calendar-picker-indicator": {
        filter: "invert(1)", // makes the calendar icon white
    }, },
    "& .MuiInputLabel-root": { color: "white" },
    "& .MuiInputLabel-root.Mui-focused": { color: "white" },
    "& .MuiSvgIcon-root": { color: "white" },
    "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": { borderColor: "white" }, }}} name="mobile"  onChange={(e) => setDate(e.target.value)} /> */}
