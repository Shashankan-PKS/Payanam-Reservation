import {Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Fab, Grid, Skeleton, Snackbar, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import {addBus} from './whishes/busSlice.js'
import NotFound from "../../notfound/NotFound.jsx";
import useFetch from "../../customhook/useFetch.js"
import Content from "./Content.jsx"

function Buses(){

    const [loading,setloading] = useState(true);
    const [open, setOpen] = useState(false);
    const [sopen, setSOpen] = useState(false);

    const Navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1500)
    }, [])

        
    
    let { error} = useFetch(import.meta.env.BASE_URL + "database.json");
        

    return(
        <>
            <Box style={{marginTop:"100px"}}>

                {error ? (
                    <NotFound/>
                    
                ) : (
                 <Content/>
                )}
            </Box>    
        </>
        
    )        
                
}
export default Buses

//npx json-server --watch data/database.json --port 3000 --static ./data
