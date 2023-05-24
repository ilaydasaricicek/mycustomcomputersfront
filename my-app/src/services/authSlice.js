import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';



const initialState = {
    products : [],
    user: {},
    loading: false
};

export const SignIn = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    const {email, password} = userData
    
    try {
        console.log(userData)
      } catch (error) {
      errorNote(`Hata: ${error}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  });



  export const Log_in = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    const {userInfo,navigate} = userData
    try {
        console.log(userInfo)
        navigate('/product')
      } catch (error) {
      localStorage.clear();
      errorNote('Oturumunuz sona erdi. Lütfen tekrar giriş yapınız.');
      return thunkAPI.rejectWithValue(error.message);
    }
  });


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = {};
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    onChangeRegister : (state,action)=>{
      state.user = {...state.user, [action.payload.name]: action.payload.value}
    },
    clearProducts : (state,action)=>{
      state.products = []
    },
   extraReducers: {
    [Log_in.pending]: (state, action) => {
      state.loading = true;
    },
    [Log_in.rejected]: (state, action) => {
      state.loading = false;
      errorNote("Email veya şifre yanlış!")
    },
    [Log_in.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("user", action.payload);
      state.user = action.payload;
    },
    
    
  }
}
});

export const { clearAuth, setUser,onChangeRegister,clearProducts } = authSlice.actions;

export default authSlice.reducer;