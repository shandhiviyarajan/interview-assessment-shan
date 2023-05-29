import AuthReducers from 'components/screens/auth/redux';
import CartReducers from 'components/screens/cart/redux';
import ProductsReducers from 'components/screens/products/redux';
import ProfileReducer from 'components/screens/profile/redux';

import { combineReducers } from '@reduxjs/toolkit';
//combine reducers
const rootReducer = combineReducers({
  ...AuthReducers,
  ...ProductsReducers,
  ...CartReducers,
  ...ProfileReducer
});

export default rootReducer;
