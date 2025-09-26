import {configureStore} from "@reduxjs/toolkit"
import busSliceReducer from './busSlice'

export const wish = configureStore({
    reducer : {
        bus : busSliceReducer
    }
})