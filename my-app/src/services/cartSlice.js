import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';


const initialState = {
    cart: [],
    loading: false
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        
    const checkBasket = state.cart.find(item=>item.id === action.payload.id)
      if(checkBasket) {
          state.cart = state.cart
      }else{
        state.cart = [...state.cart,action.payload]
      }
        successNote("Product added!")
    }, 
    clearCart: (state, action) => {
        state.cart = []
    }, 
//    extraReducers: {
//     [Register.pending]: (state, action) => {
//       state.loading = true;
//     },
    
//   }
}
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;