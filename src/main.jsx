import { createRoot } from 'react-dom/client' 
import './index.css' 
import App from './App.jsx' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import { Provider } from 'react-redux' 
import {wish} from './user/buses/whishes/Wish.js' 
import Register from './register/Register.jsx' 
import Login from './login/Login.jsx' 
import Adlogin from './adlogin/Adlogin.jsx' 
import Userhome from './user/home/Userhome.jsx' 
import Bookings from './user/booking/Bookings.jsx' 
import Profile from './user/profile/Profile.jsx' 
import UpdateBuslist from './adlogin/buseslists/UpdateBuslist.jsx' 
import Summary from './user/buses/Summary.jsx' 
import Wishlist from './user/buses/Wishlist.jsx' 
import Userlists from './adlogin/userslists/Userlists.jsx' 
import Buseslists from './adlogin/buseslists/Buseslists.jsx' 
import Bookinglists from './adlogin/bookinglist/Bookinglists.jsx' 

const router = createBrowserRouter([ 
  { 
    path : "*", 
    element : <App/> 
  },
  { path : '/', 
    element : <App /> 
  }, 
  { path : '/register',
     
    element : <Register /> 
  }, 
  { path : '/login', 
    
    element : <Login /> 
  }, 
  { path : '/adlogin', 
    element : <Adlogin /> 
  }, 
  { path : '/ticket-booking', 
    element : <Userhome /> 
  }, 
  { path : '/booking-history', 
    element : <Bookings /> 
  }, 
  { path : '/wish-list', 
    element : <Wishlist /> 
  }, 
  { path : '/user-profile', 
    element : <Profile /> 
  },
  { path : '/admin-home', 
    element : <Buseslists />
  }, 
  { path : '/post/:id', 
    element : <Summary /> 
  }, 
  { path : '/update-bus/:id', 
    element : <UpdateBuslist /> 
  },
  { path : '/Userslists', 
    element : <Userlists /> 
  }, 
  { path : '/bookinglists', 
    element : <Bookinglists/> 
  }
]); 
      createRoot(document.getElementById('root')).render( 
      <Provider store={wish}> 
        <RouterProvider router={router}/> 
      </Provider>
)