import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from 'axios';

const initialState = {
    loading: false,
    adminProducts: [],

};

export const getProductsAdmin = createAsyncThunk('admin/getProducts', async (data, thunkAPI) => {
  
  try {
        const resp = await axios.get("http://localhost:5294/api/Products") 
        console.log(resp.data)
        return resp.data
    } catch (error) {
    errorNote(`Error: ${error}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});


const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    } ,   
   extraReducers: {
    [getProductsAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.adminProducts = action.payload;
    }  
  }
}
});

export const { clearCart } = adminSlice.actions;

export default adminSlice.reducer;