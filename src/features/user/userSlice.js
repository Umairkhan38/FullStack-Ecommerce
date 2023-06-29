import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchLoggedInUserOrders } from './userAPI';


const initialState = { 
  userOrders:[],
  status:'idle'
 }


export const fetchLoggedInUserOrdersAsync=createAsyncThunk(
  'user/fetchLo',
  async(userId)=>{
    const response = await fetchLoggedInUserOrders(userId);
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
}
})

export const selectUserOrders = state=>state.user.userOrders;
export const { increment, decrement, incrementByAmount } = userSlice.actions
export default userSlice.reducer