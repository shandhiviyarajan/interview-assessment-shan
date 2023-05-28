import AuthReducers from 'components/pages/auth/redux/index.action';
import ProductsReducers from 'components/pages/environments/redux/index.action';
import CartReducers from 'components/pages/reports/redux/reportsSlice';

import { combineReducers } from '@reduxjs/toolkit';
//combine reducers
const rootReducer = combineReducers({
  ...AuthReducers,
  ...ProductsReducers,
  ...CartReducers
});

export default rootReducer;
