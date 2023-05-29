import { apiLogin } from 'core/services';
import { put, retry, takeLatest } from 'redux-saga/effects';

import { actionLoginFail, actionLoginSuccess } from '../redux/authSlice';
function* authWorker(action) {
  try {
    const response = yield retry(3, 100, apiLogin, action.payload);
    yield put(actionLoginSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actionLoginFail('Error Fetching User'));
  }
}

function* AuthSaga() {
  yield takeLatest('auth/actionLogin', authWorker);
}

export default AuthSaga;
