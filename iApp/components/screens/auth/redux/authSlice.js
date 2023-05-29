import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  auth: {
    token: null,
    isLoading: false,
    error: null
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
        error: null
      };
    },

    actionLoginSuccess: (state, action) => {
      state.auth = {
        data: action.payload,
        isLoading: true,
        error: null
      };
    },

    actionLoginFail: (state, action) => {
      state.auth = {
        data: null,
        isLoading: false,
        error: action.payload
      };
    },
    logoutUser: () => {
      return initialState;
    }
  }
});

export default authSlice.reducer;
