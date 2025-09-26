import logo from '../../assets/logo.png'
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
import { Badge, Box } from "@mui/material"
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import { useDispatch, useSelector } from "react-redux"


function Navbar(){

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

  let busState = useSelector( (state) => { return state.bus})
  console.log(busState.length)



  return(
    <>
      <AppBar component="nav" style={{backgroundColor:"black",color:"whitesmoke"}}>
        <ToolBar>
          <img src={logo} alt="Payanam" style={{width:"80px",height:"60px", margin:"10px"}}/>
          <Typography variant="h5" component="p" sx={{ flexGrow: 1}} color= 'inheriet' style={{fontFamily:"Poppins"}}>
            Payanam
          </Typography>
          <Box sx={{display:{xs: 'none', md:'flex'}}}>
            <Link style={{margin:"10px",color:"whitesmoke",fontSize:"18px",textDecoration: "none"}} to="/ticket-booking" >Ticket Booking</Link>
            <Link style={{margin:"10px",color:"whitesmoke",fontSize:"18px",textDecoration: "none"}} to="/booking-history">Booking History</Link>
            <Link style={{margin:"10px",color:"whitesmoke",fontSize:"18px",textDecoration: "none"}} to="/wish-list">  <Badge badgeContent={busState.length} color="error">My Saved Buses</Badge></Link>
            <Tooltip title="Accounts">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true" aria-expanded={open ? 'true' : undefined} disableRipple>
                  <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{display:{xs:'flex', md:'none'}}} >
            <IconButton  id="navList-button" color="inherit" onClick={opennav} aria-controls={navOpen ? 'navMenu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>
              <DragHandleRoundedIcon style={{fontSize:"40px"}} />
            </IconButton>
            <Menu anchorEl={anchorNav}
        open={navOpen}
        onClose={closenav}
        onClick={closenav}
        slotProps={{
          list: {
            'aria-labelledby': 'navList-button',
          },
        }}  id="navMenu"
              
            sx={{display:{xs:'flex', md:'none',edge:'end'}}}>
              <MenuItem onClick={()=>{Navigate('/ticket-booking')}}>Ticket Booking</MenuItem>
              <MenuItem onClick={()=>{Navigate('/booking-history')}}>Booking history</MenuItem>
              <MenuItem>
                <Link style={{color: "black",textDecoration: "none"}}  to="/wish-list">My Saved Buses</Link>
              </MenuItem>
              
              <MenuItem onClick={()=>{Navigate('/user-profile')}}><Avatar style={{width:"25px",height:"25px", marginRight:"5px" }}/> Profile</MenuItem>
              <MenuItem onClick={()=>{Navigate('/')}}> <Logout /> Logout</MenuItem>
            </Menu>
          </Box>
        </ToolBar>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>{Navigate('/user-profile')}}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem  onClick={()=>{Navigate('/')}} >
          <Logout />Logout
        </MenuItem>
      </Menu>
      </AppBar>
    </>
  )
}

export default Navbar