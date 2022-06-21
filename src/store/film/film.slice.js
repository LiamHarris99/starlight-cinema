import { createSlice } from '@reduxjs/toolkit';
import { getFilmByID } from './film.thunk';
import { handleChangeDate } from './film.action';

export const filmSlice = createSlice({
  name: 'film',
  initialState: {
    id: '',
    dateTimes: [],
    info: {},
    times: [],
    dateSelected: '',
    timeSelected: '',
    isLoading: false,
    error: null
  },
  reducers: {
    changeDate: handleChangeDate
  },
  extraReducers: {
    [getFilmByID.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.dateSelected = '';
      const { id, dateTimes, info } = payload;
      state.id = id;
      state.dateTimes = [...dateTimes];
      state.info = { ...info };
    },
    [getFilmByID.pending]: (state) => {
      state.isLoading = true;
    },
    [getFilmByID.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    }
  }
});

export const { changeDate } = filmSlice.actions;

export default filmSlice.reducer;
