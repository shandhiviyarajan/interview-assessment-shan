import AllProductSagas from 'components/screens/products/middleware';
import ProfileSagas from 'components/screens/profile/middleware';
import { all } from 'redux-saga/effects';
import AuthSagas from 'screens/auth/middleware';
// import ProductsSagas from 'screens/environments/saga/index.saga';
// import CartSagas from 'screens/reports/saga/reports.saga';
function* rootSaga() {
  yield all([...AuthSagas, ...ProfileSagas, ...AllProductSagas]);
}
export default rootSaga;
