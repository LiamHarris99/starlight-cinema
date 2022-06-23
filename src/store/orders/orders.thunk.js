import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ORDER_URL } from '../../utils/constants/url';

/* eslint-disable import/prefer-default-export */
export const addOrder = createAsyncThunk('addOrder', async (dataUpdated, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(ORDER_URL, dataUpdated);
    return data;
  } catch (err) {
    if (err.message) return rejectWithValue(err.message);

    return rejectWithValue(err);
  }
});

export const getOrdersByUserId = createAsyncThunk('getOrders', async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${ORDER_URL}?userId=${id}`);
    return data;
  } catch (err) {
    if (err.message) return rejectWithValue(err.message);

    return rejectWithValue(err);
  }
});
