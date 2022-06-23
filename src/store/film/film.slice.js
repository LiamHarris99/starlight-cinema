import { createSlice } from '@reduxjs/toolkit';
import { handleChangeDate, handleChangeTime, initSelector } from './film.action';
import { getFilmByID } from './film.thunk';

export const filmSlice = createSlice({
  name: 'film',
  initialState: {
    id: '',
    info: {},
    dateTimes: [],
    dateTimeSelected: {
      date: '',
      times: []
    },
    timeSelected: {
      value: '',
      room: {}
    },
    isLoading: false,
    error: null
  },
  reducers: {
    changeDate: handleChangeDate,
    changeTime: handleChangeTime,
    init: initSelector
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

export const { changeDate, changeTime, init } = filmSlice.actions;

export default filmSlice.reducer;
