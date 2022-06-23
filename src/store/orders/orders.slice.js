import { createSlice } from '@reduxjs/toolkit';
import { addOrder, getOrdersByUserId } from './orders.thunk';

export const orders = createSlice({
  name: 'orders',
  initialState: {
    isLoading: false,
    error: null,
    orders: []
  },
  extraReducers: {
    [addOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [addOrder.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [addOrder.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    },

    [getOrdersByUserId.pending]: (state) => {
      state.isLoading = true;
    },

    [getOrdersByUserId.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.orders = payload;
    },
    [getOrdersByUserId.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    }
  }
});

export default orders.reducer;
