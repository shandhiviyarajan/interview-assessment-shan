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
      console.log('success', action.payload);
      state.auth = {
        token: action.payload.token,
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

export const { actionLogin, actionLoginSuccess, actionLoginFail, logoutUser } = authSlice.actions;
export default authSlice.reducer;
