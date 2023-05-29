import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  profile: {
    data: null,
    isLoading: false,
    error: null
  }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    actionFetchUser: (state) => {
      state.profile = {
        data: null,
        isLoading: true,
        error: null
      };
    },

    actionFetchUserSuccess: (state, action) => {
      console.log('success', action.payload);
      state.profile = {
        data: action.payload,
        isLoading: true,
        error: null
      };
    },

    actionFetchUserFail: (state, action) => {
      state.profile = {
        data: null,
        isLoading: false,
        error: action.payload
      };
    }
  }
});

export const { actionFetchUser, actionFetchUserSuccess, actionFetchUserFail } = profileSlice.actions;
export default profileSlice.reducer;
