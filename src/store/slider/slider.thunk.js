import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FILMS_SLIDER_URL } from '../../utils/constants/url';

// eslint-disable-next-line import/prefer-default-export
export const getSlider = createAsyncThunk('get/getSlider', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(FILMS_SLIDER_URL);
    return res.data;
  } catch (err) {
    if (!err.respose) throw err;
    return rejectWithValue(err.response.data);
  }
});
