import productSlice from './product.actions';
import productsSlice from './products.actions';
const ProductsReducer = {
  products: productsSlice,
  product: productSlice
};

export default ProductsReducer;
