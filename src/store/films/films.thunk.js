import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FILMS_SHOWING_URL } from '../../utils/constants/url';

export const getFilms = createAsyncThunk('get/getFilms', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(FILMS_SHOWING_URL);
    console.log(res, 'res');
    return res.data;
  } catch (err) {
    return rejectWithValue(err.message ? err.message : err);
  }
});

export const addSlots = createAsyncThunk(
  'post/addSlots',
  async (dataInput, { rejectWithValue }) => {
    const { id, ...values } = dataInput;
    try {
      const { data } = await axios.put(`${FILMS_SHOWING_URL}/${id}`, values);
      return data;
    } catch (err) {
      return rejectWithValue(err.message ? err.message : err);
    }
  }
);
