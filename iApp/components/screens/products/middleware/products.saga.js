import { apiFetchProducts } from 'core/services';
import { put, retry, takeLatest } from 'redux-saga/effects';

import { actionFetchProductsFail, actionFetchProductsSuccess } from '../redux/products.actions';
function* productsWorker() {
  try {
    const response = yield retry(3, 100, apiFetchProducts);
    yield put(actionFetchProductsSuccess(response));
  } catch (error) {
    yield put(actionFetchProductsFail(error));
  }
}

function* ProductsSaga() {
  yield takeLatest('products/actionFetchProducts', productsWorker);
}

export default ProductsSaga;
