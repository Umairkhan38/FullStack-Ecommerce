import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchLoggedInUserOrders, updateUser, fetchLoggedInUser } from './userAPI';


const initialState = { 
  userOrders:[],
  status:'idle',
  userInfo:null
 }



export const fetchLoggedInUserOrdersAsync=createAsyncThunk(
  'user/fetchLo',
  async(userId)=>{
    const response = await fetchLoggedInUserOrders(userId);
    return response.data;
  }
)

export const fetchLoggedInUserAsync=createAsyncThunk(
  'user/fetchLoggedInUser',
  async(userId)=>{
    const response = await fetchLoggedInUser(userId);
    return response.data;
  }
)


export const updateUserAsync=createAsyncThunk(
  'user/updateUser',
  async(userId)=>{
    const response = await updateUser(userId);
    return response.data;
  }
)


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    }

},
extraReducers: (builder) => {
  builder
    .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.userOrders=action.payload;
    })
    .addCase(updateUserAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(updateUserAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.userInfo=action.payload;
    })
}
})


export const selectUserOrders = state=>state.user.userOrders;
export const selectUserInfo = state=>state.user.userInfo;
export const { increment, decrement, incrementByAmount } = userSlice.actions
export default userSlice.reducer
