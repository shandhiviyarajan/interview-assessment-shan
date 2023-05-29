import { httpClient } from 'core/interceptors';

import { AUTH, PRODUCTS } from './api';
//login
const apiLogin = async (payload) => {
  const response = await httpClient().post(AUTH.LOGIN, payload);
  return response;
};

//fetch products
const apiFetchProducts = async (data) => {
  const response = await httpClient().get(PRODUCTS.GET);
  return response;
};
export { apiFetchProducts, apiLogin };
