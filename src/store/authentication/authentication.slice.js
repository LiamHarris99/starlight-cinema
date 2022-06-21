import { createSlice } from '@reduxjs/toolkit';
import { set as setToken } from '../../services/localStorage/localStorage';
import removeToken from './authentication.actions';
import { login, register } from './authentication.thunk';

export const authenticationSlice = createSlice({
  name: 'authen',
  initialState: {
    isLoggedIn: false,
    isLoading: false
  },
  reducers: {
    logout: removeToken
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { accessToken, user } = payload;
      setToken('token', accessToken);
      state.isLoggedIn = true;
    },

    [login.rejected]: (state) => {
      state.isLoading = false;
    },

    [login.pending]: (state) => {
      state.isLoading = true;
    },

    [register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
    }
  }
});

export const { logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
