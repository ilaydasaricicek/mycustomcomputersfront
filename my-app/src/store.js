// Redux store
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './services/cartSlice';
import adminSlice from './services/adminSlice';
import authSlice from './services/adminSlice';

export const store = configureStore({
    reducer: {
      cart: cartSlice,
      admin: adminSlice,
      auth: authSlice,
    }
    
  });