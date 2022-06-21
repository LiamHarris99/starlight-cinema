import { createSlice } from '@reduxjs/toolkit';
import { getSlider } from './slider.thunk';

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    images: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getSlider.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.images = [...payload];
    },
    [getSlider.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    },
    [getSlider.pending]: (state) => {
      state.isLoading = true;
    }
  }
});

export default sliderSlice.reducer;
