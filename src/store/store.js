import { configureStore } from "@reduxjs/toolkit";
import instaSlice from "./instaSlice";



const store = configureStore({
    reducer:{
        postSlice: instaSlice
    }
})

export default store