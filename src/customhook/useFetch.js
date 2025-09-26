import axios from "axios";
import { useEffect, useState } from "react"

function useAFetch() {

    const [buses,setBuses] = useState([]);
    const [error,setError] = useState();
    const [users,setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);

    const BIN_ID = "68d69e1443b1c97be951044e";
    const API_KEY = "$2a$10$YHCtOJg1w4ba15q1PjVLNOI3zkXN1YXvaa3WGspzvvzCkAUYpsvU2";
    const BASE_URL = `https://api.jsonbin.io/v3/b/68d69e1443b1c97be951044e`
    
    const config = {
        headers: {
            "X-Master-Key": API_KEY,
            "Content-Type": "application/json"
        }
    };

    let fetchApi = async () => {
        try{
            //let response = await fetch(url);
            let response = await axios.get(BASE_URL, config )
            let data = response.data.record
            setBuses(data || []);
            setUsers(response.data.userlist)
            setBookings(response.data.bookinglist)
        }catch(error){
            setError(error.message);
        }
    }

    const updateBus = async (newData) => {
        try {
        await axios.put(BASE_URL, newData, config);
        await fetchData(); // refresh state
        } catch (error) {
        setError(error.message);
        }
    };

    const addBus = async (newBus) => {
        const data = {
            buses: [...buses, newBus],
            userlist: users,
            bookinglist: bookings
        };
        await updateBus(data);
    };

    const deleteBus = async (id) => {
        const data = {
        buses: buses.filter(b => b.id !== id),
        userlist: users,
        bookinglist: bookings
        };
        await updateBus(data);
    };
    

    useEffect(() =>{
        fetchApi();
    }, []);

    return { buses, error, setBuses, users, error, setUsers, bookings, fetchApi, addBus, deleteBus, updateBus }
}

export default useAFetch