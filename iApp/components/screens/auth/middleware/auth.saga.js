import { apiLogin } from 'core/services';
import { put, retry, takeLatest } from 'redux-saga/effects';

import { actionLoginFail, actionLoginSuccess } from '../redux/authSlice';
function* authWorker() {
  try {
    const response = yield retry(3, 100, apiLogin);
    yield put(actionLoginSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actionLoginFail('Error Fetching User'));
  }
}

function* AuthSaga() {
  yield takeLatest('authSlicer/actionLogin', authWorker);
}

export default AuthSaga;
