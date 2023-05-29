import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    actionAddToCart: (state, action) => {
      state.cart = action.payload;
    },

    actionRemoveFromCart: (state, action) => {
      state.cart = state.cart.filters((cart) => cart.id !== action.payload);
    }
  }
});

export const { actionAddToCart, actionRemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
