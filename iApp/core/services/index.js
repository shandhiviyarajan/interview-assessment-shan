import { httpClient } from 'core/interceptors';
const AUTH = {
  LOGIN: '/auth/login'
};
const PRODUCTS = {
  GET: '/products'
};
//login
const apiLogin = async (data) => {
  const response = await httpClient().post(AUTH.LOGIN, data);
  return response;
};

//fetch products
const apiFetchProducts = async (data) => {
  const response = await httpClient().get(PRODUCTS.GET);
  return response;
};
export { apiFetchProducts, apiLogin };
