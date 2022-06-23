import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN_URL, REGISTER_URL, GET_USER_BY_ID_URL } from '../../utils/constants/url';
import { set, get } from '../../services/localStorage/localStorage';

export const login = createAsyncThunk('login', async (dataInput, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(LOGIN_URL, dataInput);
    console.log(data, 'login-data');
    const { user, accessToken } = data;
    const { id, info, email } = user;

    set('id', id);
    return { accessToken, info, email };
  } catch (err) {
    if (!err.response) throw err;
    console.error(err, 'error');
    return rejectWithValue(err.response.data);
  }
});

export const register = createAsyncThunk('register', async (dataInput, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(REGISTER_URL, dataInput);
    console.log(data, 'resgister-res');
    return data;
  } catch (err) {
    if (!err.response) throw err;
    console.error(err, 'error');

    return rejectWithValue(err.response.data);
  }
});

export const getById = createAsyncThunk('getUserByID', async (_, { rejectWithValue }) => {
  try {
    const id = get('id');
    const { data } = await axios.get(GET_USER_BY_ID_URL(id));
    console.log(data, 'getByID-data');
    return data;
  } catch (err) {
    if (!err.response) throw err;
    console.error(err, 'error');

    return rejectWithValue(err.response.data);
  }
});
