import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Grid, Slide, Snackbar,Typography, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TablePaginationActions, TableRow, TextField } from "@mui/material"
import React, { useState } from "react";
import useFetch from "../../customhook/useFetch";
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Buslists.css'
import AdminNavbar from "../admin-navbar/AdminNavbar";
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";
import total from '../../assets/total_Users.png';
import tbus from '../../assets/image.jpg'
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PaidIcon from '@mui/icons-material/Paid';
import ForumIcon from '@mui/icons-material/Forum';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import WestIcon from '@mui/icons-material/West';

function Buseslists() {


    const [newBus, setnewBus] = useState( {
      "from": "",
      "to": "",
      "departure": "",
      "arrival": "",
      "price": ""
    })


    const [open,setOpen] =useState(false);
    
    const [sopen, setSOpen] = useState(false);
    const [eopen, setEOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    let navigate = useNavigate();

    let {buses, setBuses} = useFetch()


    let {users } = useFetch("/userdatabase.json")

    let {bookings} = useFetch("/bookingdatabase.json")

    const { ref, inView } = useInView({
        triggerOnce: false,   // triggers every time entry/ exit
        threshold: 0.6,      // 20% of div must be visible
    });


    let Bus = buses.length;
    let User = users.length
    let Booking = bookings.length

    let handleChange = (e) => {

        let {value , name } = e.target;
        setnewBus({
        ...newBus,
        [name] : value})

    }

    const handleClick = () => {
        setOpen( true );
    }
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
        setSOpen(false);
        setEOpen(false);
        setnewBus({        
            from: "",
            to: "",
            departure: "",
            arrival: "",
            price: ""
        })
        
        
    };

    let handleAdd = async (e) => {
        e.preventDefault();
        await addbus({ id: Date.now(), ...newBus})        
        setOpen(false);
        setSOpen(true);
        
    }

    let handleDelete = async (id) => {
        await deleteBus(id);
        setEOpen(true);
        // let newBusList = buses.filter(buslist => buslist.id !== id)
        // setBuses( newBusList );
    }

    const handleChangePage = ( event , newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    }



    return(
        <>
            <AdminNavbar />
            <div className="adhome" style={{marginTop: "100px",padding: "20px"}}>
                <h3>Welcome to the Admin Panel!</h3>
                <Grid container spacing={2} sx={{ padding: "20px" }} ref={ref}>
                    <Grid size={4} component={Paper} elevation={6} style={{backgroundColor : "rgb(56, 56, 56)", borderRadius : "10px"}}>
                        <Box  style={{ margin : "10px", height : "150px", textAlign: "center",display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"}}>
                             <EmojiTransportationIcon style={{ color: "whitesmoke" , width: "70px", height: "50px", marginBottom: "8px",position : "relative" }} sx={{"@media (max-width:550px)": {
                                                            transform: "scale(0.8)", // shrink icons
                                                            fontSize: "0.3rem",
                                                            }}}/>
                            <Box style={{color : "whitesmoke"}} >
                                { inView && <CountUp start={0} end={Bus} duration={3} delay={0.1} />}+
                                <Typography>Total Bus Lists</Typography>
                                <Button style={{ backgroundColor : "rgb(56, 56, 56)",  margin : "10px" , color : "whitesmoke"}}> View All <TrendingFlatIcon /> </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={4} component={Paper} elevation={6} style={{backgroundColor : "rgb(56, 56, 56)", borderRadius : "10px"}}>
                        <Box style={{ margin : "10px", height : "150px", textAlign: "center",display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius : "10px"}}>
                            <GroupsIcon style={{ color: "whitesmoke" , width: "70px", height: "50px", marginBottom: "8px",position : "relative" }} sx={{"@media (max-width:550px)": {
                                transform: "scale(0.8)", // shrink icons
                                fontSize: "0.3rem",
                                }}}/>
                            <Box style={{color : "whitesmoke"}}>
                                { inView && <CountUp start={0} end={User} duration={3} delay={0.1} />}+
                                <Typography>Total Users Lists</Typography>
                                <Button onClick={() => {navigate('/Userslists')}} style={{ backgroundColor : "rgb(56, 56, 56)",  margin : "10px" , color : "whitesmoke"}}> View All <TrendingFlatIcon /> </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={4} component={Paper} elevation={6} style={{backgroundColor : "rgb(56, 56, 56)", borderRadius : "10px"}}>
                        <Box style={{margin : "10px", height : "150px", textAlign: "center",display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"}}>
                             <BookOnlineIcon style={{ color: "whitesmoke" , width: "70px", height: "50px", marginBottom: "8px",position : "relative" }} sx={{"@media (max-width:550px)": {
                                                            transform: "scale(0.8)", // shrink icons
                                                            fontSize: "0.3rem",
                                                            }}} />
                            <Box style={{color : "whitesmoke"}}>
                                { inView && <CountUp start={0} end={Booking} duration={3} delay={0.1} />}+
                                <Typography>Total Bookings List</Typography>
                                <Button onClick={() => {navigate('/bookinglists')}} style={{ backgroundColor : "rgb(56, 56, 56)",  margin : "10px" , color : "whitesmoke"}}> View All <TrendingFlatIcon /> </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={4} component={Paper} elevation={6} style={{backgroundColor : "rgb(56, 56, 56)", borderRadius : "10px"}}>
                        <Box style={{ margin : "10px", height : "150px", textAlign: "center",display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"}}>
                             <PaidIcon style={{ color: "whitesmoke" , width: "70px", height: "50px", marginBottom: "8px",position : "relative" }} sx={{"@media (max-width:550px)": {
                                                            transform: "scale(0.8)", // shrink icons
                                                            fontSize: "0.3rem",
                                                            }}} />
                            <Box style={{color : "whitesmoke"}}>
                                { inView && <CountUp start={0} end={23} duration={3} delay={0.1} />}%
                                <Typography>Profit Percentage</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={4} component={Paper} elevation={6} style={{backgroundColor : "rgb(56, 56, 56)", borderRadius : "10px"}}>
                        <Box style={{ margin : "10px", height : "150px", textAlign: "center",display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"}}>
                             <ForumIcon style={{ color: "whitesmoke" , width: "70px", height: "50px", marginBottom: "8px",position : "relative" }} sx={{"@media (max-width:550px)": {
                                                            transform: "scale(0.8)", // shrink icons
                                                            fontSize: "0.3rem",
                                                            }}}/>
                            <Box style={{color : "whitesmoke"}}>
                                { inView && <CountUp start={0} end={18} duration={3} delay={0.1} />}+
                                <Typography>Total Comments</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <div className="buslistcontent" style={{padding: "20px"}}>
                <h5 style={{padding : "20px"}}>
                    Payanam Total Bus Lists - {buses.length}
                </h5>
                <div className="buslistcontainer">
                    <div className="addbus">
                        <Button variant="contained" onClick={handleClick}> + Add </Button>
                        <Dialog key={open ? "open" : "closed"} open={open} component="form" onSubmit={handleAdd} keepMounted slotProps={{transition: {appear: true, timeout: 300}}} aria-describedby="alert-dialog-slide-description" >
                            <DialogTitle>
                                Payanam Add New Bus
                            </DialogTitle>
                            <DialogContent style={{padding: "10px", width: "fit-content"}}>
                                <TextField type='name' label="Boarding Station"  name="from" value={newBus.from} onChange={handleChange} fullWidth focused required style={{marginBottom: "12px"}}/>
                                <TextField type='name' label="Departure Station"  name="to" value={newBus.to} onChange={handleChange} fullWidth focused required style={{marginBottom: "12px"}}/>
                                <TextField type='time' label="Departure time"  name="departure" value={newBus.departure} onChange={handleChange} fullWidth focused required style={{marginBottom: "12px"}}/>
                                <TextField type='time' label="Arrival time"  name="arrival" value={newBus.arrival} onChange={handleChange} fullWidth focused required style={{marginBottom: "12px"}}/>
                                <TextField type='number' label="Price "  name="price" value={newBus.price} onChange={handleChange} fullWidth focused required/>
                            </DialogContent>
                            <Divider  />
                            <DialogActions>
                                <Box sx={{flexGrow: 1}}>
                                    <Button color="error" onClick={handleClose}>Cancel</Button>
                                </Box>
                                <Button type="submit" color="success" >Confirm</Button>
                            </DialogActions>
                        </Dialog>

                        
                    </div>
                    <div className="busTable mt-4" >
                        <TableContainer sx={{width : "100%", "& .MuiTableCell-root": {
                                    fontSize: "0.9rem",   // default
                                    padding: "12px 8px",
                                    "@media (max-width:550px)": {
                                    fontSize: "0.7rem", // smaller font on mobile
                                    padding: "4px 2px", // reduce padding
                                    },
                                },
                                "& .MuiIconButton-root": {
                                    "@media (max-width:550px)": {
                                    transform: "scale(0.8)", // shrink icons
                                    padding: "2px",
                                    fontSize: "0.7rem",
                                    },
                                },}} component={Paper} elevation={10}>
                            <Table sx={{minWidth : 450}} >
                                <TableHead component={Paper} elevation={6} >
                                    <TableRow style={{backgroundColor: "#e53935", color: "whitesmoke"}}>
                                        <TableCell style={{color: "whitesmoke"}}> Boarding Station</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Departure Station</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Departure time</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Arrival time</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Price</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Edit</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody style={{backgroundColor: "#ffebee", color: "whitesmoke"}}>

                                    {buses !== null ? ( buses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(post =>{
                                        return(
                                            <TableRow key={post.id}>
                                                <TableCell >{post.from}</TableCell>
                                                <TableCell>{post.to}</TableCell>
                                                <TableCell>{post.departure}</TableCell>
                                                <TableCell>{post.arrival}</TableCell>
                                                <TableCell>{post.price}</TableCell>
                                                <TableCell style={{width : "fit-content"}}> 
                                                    <IconButton  style={{backgroundColor: "#0288d1", color: "whitesmoke"}} 
                                                    onClick={() => {navigate(`/update-bus/${post.id}`) } } >
                                                        <EditIcon sx={{"@media (max-width:550px)": {
                                                            transform: "scale(0.7)", // shrink icons
                                                            fontSize: "1.2rem",
                                                            }}}/>
                                                    </IconButton>  
                                                </TableCell>
                                                <TableCell style={{width : "fit-content"}}> 
                                                    <IconButton style={{backgroundColor: "crimson", color: "whitesmoke"}} 
                                                    onClick={() => handleDelete(post.id)}>
                                                        <DeleteIcon sx={{"@media (max-width:550px)": {
                                                            transform: "scale(0.7)", // shrink icons
                                                            fontSize: "1.2rem",
                                                            }}}/>    
                                                    </IconButton> 
                                                </TableCell>
                                            </TableRow>
                                    )})) : (
                                        <div> Loading ...</div>
                                    )}

                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination 
                                            count={buses.length}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            rowsPerPage={rowsPerPage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            rowsPerPageOptions={[5,10]}
                                            sx={{
                                                "& .MuiTablePagination-toolbar": {
                                                height: "48px",          // ✅ fixes zigzag
                                                minHeight: "48px"
                                            },
                                            "& .MuiTablePagination-selectLabel, & .MuiTablePagination-input, & .MuiTablePagination-displayedRows": {
                                                margin: 0,               // ✅ align vertically
                                            }
                                        }}
                                        />
                                    </TableRow>
                                </TableFooter>
                                
                            </Table>
                            
                        </TableContainer>
                    </div>
                </div>
            </div>

            <Snackbar onClose={handleClose} open={sopen} autoHideDuration={1500} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                You added the New Bus!
                </Alert>
            </Snackbar>

            <Snackbar onClose={handleClose} open={eopen} autoHideDuration={1500} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                You deleted the Bus data!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Buseslists

//onSubmit={handleUpdate}

{/* .slice
    

    
        
    
*/}