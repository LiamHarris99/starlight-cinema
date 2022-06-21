import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN_URL, REGISTER_URL } from '../../utils/constants/url';

export const login = createAsyncThunk('login', async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post(LOGIN_URL, data);
    console.log(res, 'res');
    return res.data;
  } catch (err) {
    if (!err.response) throw err;
    console.error(err, 'error');
    return rejectWithValue(err.response.data);
  }
});

export const register = createAsyncThunk('register', async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post(REGISTER_URL, data);
    console.log(res, 'res');
    return res.data;
  } catch (err) {
    if (!err.response) throw err;
    console.error(err, 'error');

    return rejectWithValue(err.response.data);
  }
});
