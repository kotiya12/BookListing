 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import axios from '../../api/bookApi';


 const bookSlice = createSlice({
     name:"book",
     initialState:{
        data: []
     },
     reducers:{
        fetchBook: (state, action) => {
            state.data = action.payload;
          },
          addBook: (state, action) => {
            state.data.push(action.payload)
          },
          editBookDetail: (state, action) => {
            const editedBookIndex = state.data.findIndex((book) => book.id === action.payload.id);
      
            if (editedBookIndex !== -1) {
              state.data[editedBookIndex] = action.payload;
            }
          },
          

     },
 
 });


export const { fetchBook , addBook, editBookDetail } = bookSlice.actions;

 export default bookSlice.reducer ;