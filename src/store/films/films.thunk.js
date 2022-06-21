import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FILMS_SHOWING_URL } from '../../utils/constants/url';

export const getFilms = createAsyncThunk('get/getFilms', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(FILMS_SHOWING_URL);
    console.log(res, 'res');
    return res.data;
  } catch (err) {
    if (!err.response) throw err;
    return rejectWithValue(err.response.data);
  }
});

export const addFilm = createAsyncThunk('post/addFilm', async (_thunkApi) => {});
