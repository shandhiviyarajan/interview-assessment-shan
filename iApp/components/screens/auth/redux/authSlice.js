import { clearToken, setAuthToken } from 'core/utils/helper';

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  auth: {
    token: null,
    isLoading: false,
    error: null,
    data: null
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    actionLogin: (state) => {
      state.auth = {
        data: null,
        isLoading: true,
        error: null,
        token: null
      };
    },

    actionLoginSuccess: (state, action) => {
      state.auth = {
        token: action.payload?.token,
        data: action.payload,
        isLoading: true,
        error: null
      };
      //set auth token

      setAuthToken(action.payload);
    },

    actionLoginFail: (state, action) => {
      state.auth = {
        data: null,
        isLoading: false,
        error: action.payload,
        token: null
      };
    },
    logoutUser: (state) => {
      clearToken();
      state.auth = {
        data: null,
        isLoading: false,
        error: null,
        token: null
      };
    }
  }
});

export const { actionLogin, actionLoginSuccess, actionLoginFail, logoutUser } = authSlice.actions;
export default authSlice.reducer;
