import { all } from 'redux-saga/effects';
import AuthSaga from 'screens/auth/middleware';
// import ProductsSagas from 'screens/environments/saga/index.saga';
// import CartSagas from 'screens/reports/saga/reports.saga';
function* rootSaga() {
  yield all([
    ...AuthSaga
    //...ProductsSagas, ...CartSagas
  ]);
}
export default rootSaga;
