/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';
import { get, set as setToken } from '../../services/localStorage/localStorage';
import { clearTokens } from './user.actions';
import { login, register, getById } from './user.thunk';

export const userSlice = createSlice({
  name: 'authen',
  initialState: {
    isLoggedIn: !!get('token'),
    isLoading: false,
    info: {},
    email: {},
    error: null
  },
  reducers: {
    logout: clearTokens
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { accessToken, email, info } = payload;
      setToken('token', accessToken);
      console.log(payload, 'payload-login');
      state.isLoggedIn = true;
      state.email = email;
      state.info = { ...info };
    },

    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    },

    [login.pending]: (state) => {
      state.isLoading = true;
    },

    [register.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    },

    [getById.pending]: (state) => {
      state.isLoading = true;
    },

    [getById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      Object.entries(payload).forEach(([key, value]) => (state[key] = value));
    },

    [getById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.toString();
    }
  }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
