import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Seats from '../../assets/armchair.png'
import steer from '../../assets/steering-wheel.png'
import './Summary.css'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FormGroup from '@mui/material/FormGroup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import ReplyIcon from '@mui/icons-material/Reply';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Fab, InputAdornment, Slide, TextField, Tooltip, Typography } from "@mui/material"; 

function Summary(){
    const seatRows = [
        ["A1", "A2", "A3", "A4"],
        ["B1", "B2", "B3", "B4"],
        ["C1", "C2", "C3", "C4"],
        ["D1", "D2", "D3", "D4"],
        ["E1", "E2", "E3", "E4"],
        ["F1", "F2", "F3", "F4"],
        ["G1", "G2", "G3", "G4"],
        ["H1", "H2", "H3", "H4"],
        ["I1", "I2", "I3", "I4"],
        ["J1", "J2", "J3", "J4"]
    ];

    const {id} = useParams();

    const [post,setPost] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatPrice, setseatPrice] = useState("");
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [open,setOpen] =useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [mobileError, setMobileError] = useState(false);
    const [seatError, setSeatError] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);

    const ree = /^[6-9]\d{9}$/;


    const handleClick = () => {
        if(selectedSeats.length === 0){
            setSeatError(true);
        }else if(mobileNumber.length == 0 || !ree.test(mobileNumber)){
            setMobileError(true);
        }else{
            setSeatError(false);
            setMobileError(false);
            setOpen(true);
        }
    }



    const navigate = useNavigate();


    const handleClose = () => {
        setOpen(false);
    }
    const handleSubmit = () => {

        const from = post?.from;
        const to = post?.to;
        const date = selectedDate ? selectedDate.format("DD/MM/YYYY") : "N/A";
        const time = dayjs.isDayjs(post?.departure) ? post.departure.format("HH:mm") : post?.departure || "N/A";
        const mobile = mobileNumber; // state value
        const seat = selectedSeats.join(", ");
        const price = selectedSeats.length * seatPrice;
        console.log("From :"+from, "To :"+to, "Date :"+date, "Time :"+time, "Mobile :"+mobile, "Seat :"+seat, "Price :"+price );

        setOpen(false);
        setSnackOpen(true);
        
    }
    const handleSnackClose = () => {
        setSnackOpen(false);
    }

    const Transition = React.forwardRef(function Transition(props, ref) {
        return (<Slide direction="down" ref={ref} {...props} />);
    })

    const today = new Date()

    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 3);

    const formatDate = (date) => date.toISOString().split("T")[0];

    const minDateStr = formatDate(today);
    const maxDateStr = formatDate(maxDate);

    const maxSeats = 2;

    function toggleSeat(seat) {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else  if (selectedSeats.length < maxSeats) {
            setSelectedSeats([...selectedSeats, seat]);
        } else {
            alert("You can only select up to 2 seats.");
        }
    }

    useEffect(() => {
        fetch("/database.json/"+ id)
        .then(response=>{
            return response.json()
        })
        .then(data=> {
            setPost({ ...data,
          date: data.date ? dayjs(data.date, "YYYY-MM-DD") : dayjs()
        });
            setseatPrice(data.price);
        })

        

        .catch(err=>{
            console.log(err)
        });
    }, [id]);

    
    return(
        <>
            <div className="sumcontainer">
                {post && 
                <>
                    <div className="details">
                        <h4> Booking Summary of {post.from} to {post.to}</h4>
                    </div>
                    <Tooltip title= "Back" >
                        <Fab onClick={() => {navigate("/ticket-booking")}} color="primary" aria-label="add" sx={{
                            position: "absolute",   // make it float
                            top: 25,
                            right: 20,
                        }}>
                            <ReplyIcon />
                        </Fab>
                    </Tooltip>
                </>
                
                }
                <div className="seating-area">
                    <div className="bussuminfo">
                        <Box className="summary">
                            <h3 className="heading">Booking Summary</h3>
                            {post && <div className="detailssum">
                            <form >
                            <Container className="grid" style={{ width:"100%"}}>
                            <TextField  label="Boarding Station " name="from"  value={post.from}  InputProps={{readOnly: true,startAdornment: (
                                <InputAdornment position="start"> <FlightTakeoffIcon /> </InputAdornment>), }}/>


                            <TextField  label="Departure Station " name="to" value={post.to}  InputProps={{readOnly: true,startAdornment: (
                                <InputAdornment position="start"> <FlightLandIcon /> </InputAdornment>), }}/>


                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Date Picker " format="DD/MM/YYYY" name="date" value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} minDate={dayjs()} maxDate={dayjs().add(3, "day")} required />
                            </LocalizationProvider>
                            
                            <TextField  label="Departure Time " name="time"  value= {dayjs.isDayjs(post?.departure) ? post.departure.format("HH:mm") : post?.departure || "N/A"} 
                             InputProps={{readOnly: true,startAdornment: (
                                <InputAdornment position="start"> <AccessTimeIcon /> </InputAdornment>), }}/>


                            <TextField  label="Arrival Time " value= {dayjs.isDayjs(post?.arrival) ? post.arrival.format("HH:mm") : post?.arrival || "N/A"} 
                            InputProps={{readOnly: true,startAdornment: (
                                <InputAdornment position="start"> <AccessTimeIcon /> </InputAdornment>), }}/>


                            <TextField required  label="Mobile Number " name="mobile" type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} InputProps={{startAdornment: (
                                <InputAdornment position="start"> <PhoneAndroidIcon /> </InputAdornment>), }} error={mobileError} helperText= {mobileError ? " Mobile must contains 10 Number(0-9) and Number must starts with ('6','7','8','9') " : ""}/>


                            <TextField required  label="Selected Seats" name="seats" value= {selectedSeats.join(", ")} 
                                 InputProps={{startAdornment: (
                                <InputAdornment position="start"> <AirlineSeatReclineExtraIcon /> </InputAdornment>), }} error={seatError}/>


                            <TextField required  label="Price" name="price" value={selectedSeats.length*seatPrice}  InputProps={{startAdornment: (
                                <InputAdornment position="start"> <CurrencyRupeeIcon /> </InputAdornment>), }}/>


                            </Container>
                            <Button variant="contained" style={{margin:"10px"}} onClick={handleClick}>Book Tickets</Button>
                            
                            

                            <Dialog key={open ? "open" : "closed"} open={open} onClose={handleClose} keepMounted slots = {{ transition: Transition }} slotProps={{transition: {appear: true, timeout: 300}}} aria-describedby="alert-dialog-slide-description" >
                                <DialogTitle>
                                    Payanam Tickets Confirmation
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description" style={{color:"rgb(56, 56, 56)"}}>
                                        Are you Ready to confirm your Tickets {post.from} to {post.to} on {selectedDate ? selectedDate.format("DD-MM-YYYY") : "N/A"} and the seats of {selectedSeats.join(", ")} ?
                                    </DialogContentText>
                                </DialogContent>
                                <Divider  />
                                <DialogActions>
                                    <Box sx={{flexGrow: 1}}>
                                        <Button color="error"  onClick={handleClose}>Cancel</Button>
                                    </Box>
                                    <Button color="success" onClick={handleSubmit} >Confirm</Button>
                                </DialogActions>
                            </Dialog>
                            <Snackbar open={snackOpen} autoHideDuration={5000} onClose={handleSnackClose}>
                                <Alert
                                onClose={handleSnackClose}
                                severity="success"
                                variant="filled"
                                sx={{ width: '100%' }}
                                >
                                Your Seats are Booked Successfully!
                                </Alert>
                            </Snackbar>
                            </form>
                        </div>}
                        </Box>
                        <div className="selectseat bg-body-secondary">
                            <div className="steering">
                                <img src={steer} alt="steer"/>
                            </div>
                            <div className="busseats " style={{ display: "flex", gap: "10px" }}>
                                {seatRows.map((row, rowIndex) => (
                                    <div key={rowIndex} className="seats" style={{ display: "flex", flexDirection: "column" }}>
                                        {row.map((seat, seatIndex) => (
                                            <div key={seat} onClick={() => toggleSeat(seat)} className="inseat"
                                                style={{

                                                backgroundColor: selectedSeats.includes(seat)
                                                    ? "rgb(21, 191, 21)"
                                                    : "#bbb9b9",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: 5,
                                                cursor : "pointer",
                                                marginBottom :   seatIndex === 1 ? 30 : 5  
                                                }}
                                                title={seat}>
                                                <img src={Seats} alt="seat" className="armchair"
                                                style={{filter: selectedSeats.includes(seat) }} />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary

