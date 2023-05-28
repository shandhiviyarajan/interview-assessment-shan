import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../redux';
import rootSaga from '../saga';
// create middleware
const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
// configure store
const store = configureStore({
  reducer: rootReducer,
  middleware
});
// run saga watchers
sagaMiddleware.run(rootSaga);
export default store;
