import AllProductSagas from 'components/screens/products/middleware';
import ProfileSagas from 'components/screens/profile/middleware';
import { all } from 'redux-saga/effects';
import AuthSagas from 'screens/auth/middleware';
function* rootSaga() {
  yield all([...AuthSagas, ...ProfileSagas, ...AllProductSagas]);
}
export default rootSaga;
