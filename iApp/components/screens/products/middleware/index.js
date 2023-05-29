import ProductSaga from './product.saga';
import ProductsSaga from './products.saga';
const AllProductSagas = [ProductsSaga(), ProductSaga()];

export default AllProductSagas;
