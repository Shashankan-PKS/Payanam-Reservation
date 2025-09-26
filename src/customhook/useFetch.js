import axios from "axios";
import { useEffect, useState } from "react"

function useAFetch(url) {

    const [buses,setBuses] = useState([]);
    const [error,setError] = useState();
    const [users,setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);
    

    useEffect(() =>{
        let fetchApi = async () => {
            try{
                //let response = await fetch(url);

                let response = await axios.get( url )

                setBuses(response.data.buslist);
                setUsers(response.data.userlist)
                setBookings(response.data.bookinglist)
            }catch(error){
                setError(error.message);
            }
        }
        fetchApi();
    }, []);

    return { buses, error, setBuses, users, error, setUsers, bookings }
}

export default useAFetch