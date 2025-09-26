import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Buses from '../../assets/bus1.jpg'
import {Alert, AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Skeleton, Snackbar, Typography } from "@mui/material"
import { deleteBus } from './whishes/busSlice';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import DeleteIcon from '@mui/icons-material/Delete';

function Wishlist() {

    const [loading,setloading] = useState(true);
    const [open, setOpen] = useState(false);

    const Navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        },3000)
    })

    let busWishlist = useSelector((state) => {
        return (state.bus);
    })
    
    
    let dispatch = useDispatch();

    let handleDelete =(reduxItemId) => {
        dispatch( deleteBus( reduxItemId));
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

   return(
    <>
        <AppBar sx={{ backgroundColor:"black", display: "flex", flexDirection: "row", alignItems: "center", p: 1 }}>
            <Typography sx={{flexGrow :1 }}  fontSize={{xs: 17, sm: 20, md: 25 }} variant='h4' component="p" style={{margin: "10px"}}>User Saved Buses</Typography>
            <Button fontSize={{xs: 14, sm: 20, md: 25 }} style={{color: "whitesmoke", marginRight : "40px"}} onClick={() => {Navigate("/ticket-Booking")}} startIcon={<ReplyAllIcon />}>Back</Button>
        </AppBar>
        

        
        <Grid style={{marginTop : "100px"}} container size={4} rowSpacing={2} margin={{ sm: 4, md: 2}} marginLeft={{xs: 6}} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
            {busWishlist.length === 0 ? (
            <h4>You dont have anything in your saved buses</h4>
            ) : (
            <>    
            {busWishlist && busWishlist.map(post => {
            return(
            <Grid key={post.id} size={{xs: 10, sm: 6, md: 4}}>
                <Card  style={{ textAlign: "center", display: "flex", flexDirection: "column", height: "100%"}} elevation={6}> 
                    <CardActionArea style={{ flexGrow: 1 }}>
                        <CardMedia>
                            { loading ? (<Skeleton variant="rectangular" width={1000} height={250} animation="wave" />) : (
                            <img src={Buses} alt="bus" style={{width:"100%", height:"250px",}}/>) }
                        </CardMedia> 
                        <CardContent>
                            { loading ? (
                                <Skeleton variant="text" animation="wave"  />
                            ) : (

                            <Box display="flex" alignItems="center" justifyContent="center"  gap={1}>
                                <Box textAlign="center">
                                    <Typography variant="h6" component="p" fontSize={{ xs: 14, sm: 16, md: 20 }}>
                                        {post.from}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"fontSize={{ xs: 12, sm: 14, md: 16 }}>
                                        {post.departure}
                                    </Typography>
                                </Box>
                                <Box flexGrow={1} height="2px" bgcolor="gray" maxWidth="80px" />
                                <Box textAlign="center">
                                    <Typography variant="h6" component="p" fontSize={{ xs: 14, sm: 16, md: 20 }}>
                                        {post.to}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"fontSize={{ xs: 12, sm: 14, md: 16 }}>
                                        {post.arrival}
                                    </Typography>
                                </Box>
                            </Box>) }
                            { loading ? (
                                <Skeleton variant="text" animation="wave"  />
                            ) : (
                            <Typography variant="h6" component="p" fontSize={{xs: 15, sm: 18, md: 22 }} color="green" padding={{xs: 0.2, sm: 0.5, md: 1}}>
                                Price : ₹ {post.price}
                            </Typography>)}
                        </CardContent>
                    </CardActionArea>
                    <Box style={{ display: "flex", justifyContent: "center", gap: "10px",padding: "10px"}}>
                    
                        {loading ? (<Skeleton variant="rounded" animation="wave" style={{margin:"10px"}} width={100} height={40}/>) : ( 
                         <>   
                        <Button style={{width:"35%",backgroundColor:"crimson",color:"whitesmoke", margin : "10px"}} className="fontsize" sx={{display: {xs:"none", sm:"block",md:"block"},}}  onClick={() => handleDelete(post.id)} > <DeleteIcon /> Remove </Button>
                        <Button style={{backgroundColor:"crimson",color:"whitesmoke", margin : "10px"}} className="fontsize" sx={{display: {xs:"block",sm:"none",md:"none"},}}  onClick={() => handleDelete(post.id)}  ><DeleteIcon /> </Button>
                        </>
                        )}

                        {loading ? (<Skeleton variant="rounded" animation="wave" style={{margin:"10px"}} width={100} height={40}/>) : (
                         <>   
                        <Button style={{width:"45%",backgroundColor:"blueviolet",color:"whitesmoke", height: "fit-content", margin: "10px"}}  className="fontsize"   onClick={() => {Navigate('/post/'+ post.id)}} sx={{display: {xs:"none", sm:"block",md:"block"},}} > <i class="fa-solid fa-ticket "></i> Book Seats</Button>
                        <Button style={{backgroundColor:"blueviolet",color:"whitesmoke", height: "fit-content", margin: "10px"}}  className="fontsize"   onClick={() => {Navigate('/post/'+ post.id)}} sx={{display: {xs:"block",sm:"none",md:"none"},}} >Book Seats</Button>
                        </> )}
                    </Box>
                </Card>
            </Grid>)
            })}
        </>    
        )}
        </Grid>
        
        <Snackbar onClose={handleClose} open={open} autoHideDuration={1500} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
            You removed the Bus from wishlist!
            </Alert>
        </Snackbar>
    </>
   )

}

export default Wishlist

//
