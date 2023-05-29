import { httpClient } from 'core/interceptors';

import { AUTH, PRODUCTS, USERS } from './api';
//login
const apiLogin = async (payload) => {
  const response = await httpClient().post(AUTH.LOGIN, payload);
  return response;
};

//fetch products
const apiFetchProducts = async () => {
  const response = await httpClient().get(PRODUCTS.GET);
  return response;
};

//fetch product with product id
const apiFetchProduct = async (payload) => {
  const response = await httpClient().get(`${PRODUCTS.GET}/${payload}`);
  console.log(response);
  return response;
};

//fetch users with user id
const apiGetUser = async (payload) => {
  const response = await httpClient().get(`${USERS.GET}/${payload}`);

  console.log(response);
  return response;
};
export { apiFetchProduct, apiFetchProducts, apiGetUser, apiLogin };
