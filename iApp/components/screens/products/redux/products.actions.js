import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: {
    isLoading: false,
    error: null,
    data: null
  }
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    actionFetchProducts: (state) => {
      state.products = {
        data: null,
        isLoading: true,
        error: null
      };
    },

    actionFetchProductsSuccess: (state, action) => {
      console.log('success', action.payload);
      state.products = {
        data: action.payload,
        isLoading: true,
        error: null
      };
    },

    actionFetchProductsFail: (state, action) => {
      state.products = {
        data: null,
        isLoading: false,
        error: action.payload
      };
    }
  }
});

export const { actionFetchProducts, actionFetchProductsSuccess, actionFetchProductsFail } = productsSlice.actions;
export default productsSlice.reducer;
