import { createSlice } from '@reduxjs/toolkit';
import { getFilms } from './films.thunk';

export const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    films: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getFilms.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.films = [...payload];
    },

    [getFilms.pending]: (state) => {
      state.isLoading = true;
    },

    [getFilms.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    }
  }
});

export default filmsSlice.reducer;
