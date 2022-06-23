import { createSlice } from '@reduxjs/toolkit';
import { getFilms, addSlots } from './films.thunk';

export const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    films: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getFilms.pending]: (state) => {
      state.isLoading = true;
    },

    [getFilms.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.films = [...payload];
    },

    [getFilms.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    },

    [addSlots.pending]: (state) => {
      state.isLoading = true;
    },

    [addSlots.fulfilled]: (state) => {
      state.isLoading = false;
    },

    [addSlots.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    }
  }
});

export default filmsSlice.reducer;
