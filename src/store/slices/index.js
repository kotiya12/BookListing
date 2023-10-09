import { configureStore } from "@reduxjs/toolkit";
import  bookSlice  from "./BookSlice";

const store = configureStore({
    reducer:{
        book:bookSlice
    }
});

export default store;