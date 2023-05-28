import { put, retry, takeLatest } from 'redux-saga/effects';

import { getProfile } from '../../../../core/services/user/userService';
import { getProfileFail, getProfileSuccess } from '../redux/userProfileSlice';
function* getProfileWorker() {
  try {
    const user = yield retry(3, 100, getProfile);
    yield put(getProfileSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(getProfileFail('Error Fetching User'));
  }
}

function* ProfileSaga() {
  yield takeLatest('userProfile/getUserRequest', getProfileWorker);
}

export default ProfileSaga;
