import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  profile: {
    data: null,
    isLoading: false,
    error: null
  },

  auth: {
    token: null,
    isLoading: false,
    error: null
  }
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    getUserProfile: (state) => {
      state.profile = {
        data: null,
        isLoading: true,
        error: null
      };
    },
    getProfleSuccess: (state, action) => {
      state.profile = {
        data: action.payload,
        isLoading: false,
        error: null
      };
    },
    getProfileFail: (state, action) => {
      state.profile = {
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

export default userProfileSlice.reducer;
