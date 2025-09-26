import './App.css'
import logo from './assets/logo.png'
import Faq from './faq/Faq.jsx'
import Footer from './footer/Footer.jsx'
import Partners from './partners/Partners.jsx'
import Services from './services/Services.jsx'
import AppBar from "@mui/material/AppBar"
import Typography  from "@mui/material/Typography"
import ToolBar  from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Logout from "@mui/icons-material/Logout"
import React, { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { Box } from "@mui/material"
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';


function App() {

  const [anchorNav,setAnchorNav] = useState(null);
     const navOpen = Boolean(anchorNav);
    const opennav = (event) =>{
      setAnchorNav(event.currentTarget);
    };
    const closenav =() => {
      setAnchorNav(null);
    };
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const Navigate = useNavigate();
  
  return (
    <>
    <main>
      <AppBar component="nav" style={{backgroundColor:"black",color:"whitesmoke"}}>
        <ToolBar>
          <img src={logo} alt="Payanam" style={{width:"80px",height:"60px", margin:"10px"}}/>
          <Typography variant="h5" component="p" sx={{ flexGrow: 1}} color= 'inheriet' style={{fontFamily:"Poppins"}}>
            Payanam
          </Typography>
          <Box sx={{display:{xs: 'none', md:'flex'}}}>
            <Link style={{margin:"10px",color:"whitesmoke",fontSize:"18px",textDecoration: "none"}} to="/login" >Login</Link>
            <Link style={{margin:"10px",color:"whitesmoke",fontSize:"18px",textDecoration: "none"}} to="/register">Register</Link>
            <Link style={{margin:"10px",color:"whitesmoke",fontSize:"18px",textDecoration: "none"}} to="/adlogin">Admin Login</Link>
          </Box>
          <Box sx={{display:{xs:'flex', md:'none'}}} >
            
              <IconButton  id="navList-button" color="inherit" onClick={opennav} aria-controls={navOpen ? 'navMenu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>
                <DragHandleRoundedIcon style={{fontSize:"40px"}} />
              </IconButton>
            
            <Menu style={{paddingRight : "0px"}} anchorEl={anchorNav}
              open={navOpen}
              onClose={closenav}
              onClick={closenav}
              slotProps={{
                list: {
                  'aria-labelledby': 'navList-button',
                },
              }}  id="navMenu"
              sx={{display:{xs:'flex', md:'none',edge:'end'}}}>
              
                <MenuItem onClick={() => {Navigate("/login")}}>Login</MenuItem>
                <MenuItem onClick={() => {Navigate("/register")}}>Register</MenuItem>
                <MenuItem onClick={() => {Navigate("/adlogin")}}> Admin Login</MenuItem>

            </Menu>
          </Box>
        </ToolBar>
      </AppBar>
      <section className='introcontainer'>
        <div className="content">
          <h3>
            Let's start your journey with us safe and secure with Payanam Service
          </h3>
          <Button variant='contained' onClick={() => {Navigate("/ticket-booking")}}>Book Tickets</Button>
        </div>
      </section>
    </main>
    <section>
      <Services />
      <hr />
    </section>
    <section>
      <Partners />
      <hr />
    </section>
    <section>
      <Faq />
    </section>
    <section>
      <hr />
      <Footer />
    </section>
    </>
  )
}

export default App