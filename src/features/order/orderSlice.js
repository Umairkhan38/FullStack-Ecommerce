import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createOrder } from './orderAPI'

const initialState = { 
  orders: [],
  status:'idle'
}


export const createOrderAsync=createAsyncThunk(
  'order/createOrder',  
  async(order)=>{
    const response = await createOrder(order)
    return response.json;
  } 

)


const counterSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },

    extraReducers: (builder) => {
      builder
        .addCase(createOrderAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(createOrderAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.orders.push( action.payload);
        })
      }
    }
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer