import AuthReducers from 'components/screens/auth/redux';

// import ProductsReducers from 'screen/environments/redux';
// import CartReducers from 'screen/reports/redux';
import { combineReducers } from '@reduxjs/toolkit';
//combine reducers
const rootReducer = combineReducers({
  ...AuthReducers
  // ...ProductsReducers,
  // ...CartReducers
});

export default rootReducer;
