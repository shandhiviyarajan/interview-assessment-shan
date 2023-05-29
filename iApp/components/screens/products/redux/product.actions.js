import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  product: {
    data: null,
    isLoading: false,
    error: null
  }
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    actionFetchProduct: (state, action) => {
      console.log(action.payload);
      state.product = {
        data: null,
        isLoading: true,
        error: null
      };
    },

    actionFetchProductSuccess: (state, action) => {
      state.product = {
        data: action.payload,
        isLoading: false,
        error: null
      };
    },

    actionFetchProductFail: (state, action) => {
      state.product = {
        data: null,
        isLoading: false,
        error: action.payload
      };
    }
  }
});

export const { actionFetchProduct, actionFetchProductSuccess, actionFetchProductFail } = productSlice.actions;
export default productSlice.reducer;
