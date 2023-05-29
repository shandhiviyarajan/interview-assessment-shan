import rootSaga from 'core/middleware';
import rootReducer from 'core/redux';
import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';
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
