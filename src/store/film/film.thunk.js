import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FILMS_SHOWING_URL } from '../../utils/constants/url';

// eslint-disable-next-line import/prefer-default-export
export const getFilmByID = createAsyncThunk('get/getFilmByID', async (id, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${FILMS_SHOWING_URL}/${id}`);
    console.log(res, 'res filmByID');
    return res.data;
  } catch (err) {
    if (!err.respose) throw err;
    return rejectWithValue(err.response.data);
  }
});
