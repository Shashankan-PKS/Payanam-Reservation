import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Slide, Snackbar, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TablePaginationActions, TableRow, TextField } from "@mui/material"
import React, { useEffect, useState } from "react";
import useFetch from "../../customhook/useFetch";
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function UpdateBuslist() {

    const [uopen, setUOpen] = useState(true);
    const [sopen, setSOpen] = useState(false);
    const [updateBus, setUpdateBus] = useState(null)

    let navigate = useNavigate();

    let {id} = useParams();

    useEffect( () => {
        axios.get( `/bookingdatabase.json/${id}` )
        .then( res => setUpdateBus(res.data))
    },[] )


    let {buses} = useFetch("/database.json")

    let handleChange = (e) => {

        let {value , name } = e.target;
        setUpdateBus({
        ...updateBus,
        [name] : value})

    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setSOpen(false);
        navigate('/admin-home'); // navigate only when snackbar closes
    };

    

    let handleUpdate = (e) => {
        e.preventDefault();
        fetch(`/database.json/${id}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify( updateBus )
        })
        .then(() => {
            setSOpen(true);
            
        })
    }


    if(updateBus !== null){
        return(
        <>
            <Dialog key={open ? "open" : "closed"} open={uopen} component="form" onSubmit={handleUpdate} keepMounted slotProps={{transition: {appear: true, timeout: 300}}} aria-describedby="alert-dialog-slide-description" >
                <DialogTitle>
                    Payanam Update Bus
                </DialogTitle>
                <DialogContent style={{padding: "10px", width: "fit-content"}}>
                    <TextField type='name' label="Boarding Station" value={updateBus.from} onChange={handleChange} name="from"  fullWidth focused required style={{marginBottom: "12px"}}/>
                    <TextField type='name' label="Departure Station" value={updateBus.to} onChange={handleChange} name="to" fullWidth focused required style={{marginBottom: "12px"}}/>
                    <TextField type='time' label="Departure time" value={updateBus.departure} onChange={handleChange} name="departure" fullWidth focused required style={{marginBottom: "12px"}}/>
                    <TextField type='time' label="Arrival time" value={updateBus.arrival} onChange={handleChange} name="arrival" fullWidth focused required style={{marginBottom: "12px"}}/>
                    <TextField type='number' label="Price " value={updateBus.price} onChange={handleChange} name="price" fullWidth focused required/>
                </DialogContent>
                <Divider  />
                <DialogActions>
                    <Box sx={{flexGrow: 1}}>
                        <Button color="error" onClick={()=> navigate("/admin-home")}>Cancel</Button>
                    </Box>
                    <Button type="submit" color="success" >Update</Button>
                </DialogActions>
            </Dialog>


            <Snackbar onClose={handleClose} open={sopen} autoHideDuration={1500} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                You updated the Bus successfully!
                </Alert>
            </Snackbar>
        </>
    )
    }else{
        <div><h3>Loading.....</h3></div>
    }


    
}

export default UpdateBuslist

//    onChange={handleChange}   onChange={handleChange}
//  onChange={handleChange}   onChange={handleChange}   onClick={handleClose}  