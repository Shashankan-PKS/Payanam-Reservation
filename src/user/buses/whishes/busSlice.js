import {createSlice} from "@reduxjs/toolkit"


let datafromWeb = JSON.parse ( localStorage.getItem("buses"));

const busSlice = createSlice({
    name : "bus",
    initialState : datafromWeb || [],
    reducers : {
        addBus( state, action){
            state.push( action.payload );

            localStorage.setItem("buses", JSON.stringify([...state]));
        },
        deleteBus(state, action){
            let busItemId = action.payload;
            let newBuslist = state.filter( buslists =>  buslists.id !== busItemId );

            localStorage.setItem("buses", JSON.stringify([...newBuslist]));

            return newBuslist;
        }
    }
})


export default busSlice.reducer

export let {addBus, deleteBus} = busSlice.actions