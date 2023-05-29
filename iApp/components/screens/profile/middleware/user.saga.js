import { apiGetUser } from 'core/services';
import { put, retry, takeLatest } from 'redux-saga/effects';

import { actionFetchUserFail, actionFetchUserSuccess } from '../redux/user.actions';
function* userWorker(action) {
  console.log(action);
  try {
    const response = yield retry(3, 100, apiGetUser, action.payload);

    console.log(response);
    yield put(actionFetchUserSuccess(response));
  } catch (error) {
    yield put(actionFetchUserFail(error));
  }
}

function* UserSaga() {
  yield takeLatest('profile/actionFetchUser', userWorker);
}

export default UserSaga;
