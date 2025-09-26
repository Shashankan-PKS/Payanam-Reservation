import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Slide, Snackbar, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TablePaginationActions, TableRow, TextField } from "@mui/material"
import React, { useState } from "react";
import useAFetch from "../../customhook/useFetch.js";
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../admin-navbar/AdminNavbar";

function Bookinglists() {


    const [open,setOpen] =useState(false);
    
    const [sopen, setSOpen] = useState(false);
    const [eopen, setEOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    let navigate = useNavigate();
    
    
    let { bookings } = useAFetch("/bookingdatabase.json")

    // let handleChange = (e) => {

    //     let {value , name } = e.target;
    //     setnewBus({
    //     ...newBus,
    //     [name] : value})

    // }

    const handleClick = () => {
        setOpen( true );
    }
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
        setSOpen(false);
        setEOpen(false);
        
        
        
    };

    let handleAdd = (e) => {
        e.preventDefault();
        fetch("/bookingdatabase.json")
        .then(() => {
            setOpen(false);
            setSOpen(true);
        })
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
            <div className="buslistcontent" style={{marginTop: "100px",padding: "20px"}}>
                <h5>
                    Payanam Total Bookings Lists - {bookings.length}
                </h5>
                <div className="buslistcontainer">
                    
                    <div className="busTable mt-4" >
                        <TableContainer sx={{width : "100%", "& .MuiTableCell-root": {
                                    fontSize: "0.9rem",   // default
                                    padding: "12px 8px",
                                    "@media (max-width:650px)": {
                                    fontSize: "0.7rem", // smaller font on mobile
                                    padding: "4px 2px", // reduce padding
                                    },
                                },
                                "& .MuiIconButton-root": {
                                    "@media (max-width:650px)": {
                                    transform: "scale(0.8)", // shrink icons
                                    padding: "2px",
                                    fontSize: "0.7rem",
                                    },
                                },}} component={Paper} elevation={10}>
                            <Table sx={{minWidth : 450}} >
                                <TableHead component={Paper} elevation={6} >
                                    <TableRow style={{backgroundColor: "#e53935", color: "whitesmoke"}}>
                                        <TableCell style={{color: "whitesmoke"}}> Name</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Mobile</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>From</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>To</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Date</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Seat</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Price</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Edit</TableCell>
                                        <TableCell style={{color: "whitesmoke"}}>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody style={{backgroundColor: "#ffebee", color: "whitesmoke"}}>

                                    {bookings !== null ? ( bookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user =>{
                                        return(
                                            <TableRow key={user.id}>
                                                <TableCell >{user.name}</TableCell>
                                                <TableCell>{user.phone}</TableCell>
                                                <TableCell>{user.from}</TableCell>
                                                <TableCell>{user.to}</TableCell>
                                                <TableCell>{user.date}</TableCell>
                                                <TableCell>{user.seat}</TableCell>
                                                <TableCell>{user.price}</TableCell>
                                                <TableCell style={{width : "fit-content"}}> 
                                                    <IconButton  style={{backgroundColor: "#0288d1", color: "whitesmoke"}} 
                                                    onClick={() => {navigate(`/update-bus/${user.id}`) } } >
                                                        <EditIcon sx={{"@media (max-width:650px)": {
                                                            transform: "scale(0.7)", // shrink icons
                                                            fontSize: "1.2rem",
                                                            }}}/>
                                                    </IconButton>  
                                                </TableCell>
                                                <TableCell style={{width : "fit-content"}}> 
                                                    <IconButton style={{backgroundColor: "crimson", color: "whitesmoke"}} 
                                                    onClick={() => handleDelete(user.id)}>
                                                        <DeleteIcon sx={{"@media (max-width:650px)": {
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
                                            count={bookings.length}
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

export default Bookinglists