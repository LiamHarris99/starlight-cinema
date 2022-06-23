import { createSlice } from '@reduxjs/toolkit';
import { handleSetCombo, handleInitCombo } from './combo.actions';

export const comboSlice = createSlice({
  name: 'combos',
  initialState: {
    combos: [],
    total: 0
  },
  reducers: {
    setCombo: handleSetCombo,
    init: handleInitCombo
  }
});

export const { setCombo, init } = comboSlice.actions;

export default comboSlice.reducer;
