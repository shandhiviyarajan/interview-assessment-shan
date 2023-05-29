import { apiFetchProduct } from 'core/services';
import { put, retry, takeLatest } from 'redux-saga/effects';

import { actionFetchProductFail, actionFetchProductSuccess } from '../redux/product.actions';
function* productWorker(action) {
  try {
    const response = yield retry(3, 100, apiFetchProduct, action.payload);
    yield put(actionFetchProductSuccess(response));
  } catch (error) {
    yield put(actionFetchProductFail(error));
  }
}

function* ProductSaga() {
  yield takeLatest('product/actionFetchProduct', productWorker);
}

export default ProductSaga;
