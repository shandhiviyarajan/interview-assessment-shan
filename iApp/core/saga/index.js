import AuthSagas from 'components/pages/auth/saga/index.saga';
import ProductsSagas from 'components/pages/environments/saga/index.saga';
import CartSagas from 'components/pages/reports/saga/reports.saga';
import { all } from 'redux-saga/effects';
function* rootSaga() {
  yield all([...AuthSagas, ...ProductsSagas, ...CartSagas]);
}
export default rootSaga;
