import {Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Fab, Grid, Skeleton, Snackbar, Typography } from "@mui/material"
import Buses from '../../assets/bus1.jpg'
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
//import './Content.css'
import { useDispatch, useSelector } from "react-redux"
import {addBus} from './whishes/busSlice.js'
import NotFound from "../../notfound/NotFound";
import useFetch from '../../customhook/useFetch.js'

function Content(){

    const [loading,setloading] = useState(true);

    const [open, setOpen] = useState(false);
    const [sopen, setSOpen] = useState(false);

    const Navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 4000)
        
        
    }, [])

        
    let {buses , error} = useFetch("/database.json");
        

    let dispatch = useDispatch();

    let busState = useSelector( (state) => { return state.bus})
    

    let addBustoWish = (post) => {

        let checkBus = busState.some( busState => busState.id == post.id)

        
        if(!checkBus){
            dispatch( addBus(post) );
            setSOpen(true);
        }else{
            setOpen(true);
        }

        
    }
    const handleClose = () => {
        setOpen(false);
        setSOpen(false);
    };
    


    return(
        <>
            <Box style={{marginTop:"100px"}}>

                {error ? (
                    <NotFound/>
                    
                ) : (
                 <>   
                <h3>Ticket Booking</h3>
                <Grid container size={4} rowSpacing={2} margin={{ sm: 4, md: 2}} marginLeft={{xs: 6}} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    {buses && buses.map(post => {
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
                                            <Typography variant="body2" color="text.secondary" fontSize={{ xs: 12, sm: 14, md: 16 }}>
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
                                    </Box>
                                ) }

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
                                <Button style={{backgroundColor:"blueviolet",color:"whitesmoke", margin : "10px"}} className="fontsize"  onClick={() => addBustoWish(post)} >Add whishlist</Button> )}

                                {loading ? (<Skeleton variant="rounded" animation="wave" style={{margin:"10px"}} width={100} height={40}/>) : (
                                <Button style={{backgroundColor:"blueviolet",color:"whitesmoke", height: "fit-content", margin: "10px",padding: "10px"}}  className="fontsize"  onClick={() => {Navigate('/post/'+ post.id)}} startIcon={<i className="fa-solid fa-ticket fs-2xs"></i>}>   Book Seats</Button> )}

                            </Box>
                        </Card>
                    </Grid>)
                    })}
                </Grid>    
                </>
                )}
            </Box> 

            <Snackbar onClose={handleClose} open={sopen} autoHideDuration={1500} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
                >
                    You have added the wishlist successfully!
                </Alert>
            </Snackbar>

            <Snackbar onClose={handleClose} open={open} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert
                onClose={handleClose}
                severity="warning"
                variant="filled"
                sx={{ width: '100%' }}
                >
                    You have already added to the wishlist!
                </Alert>
            </Snackbar>

        </>
    )
}

export default Content