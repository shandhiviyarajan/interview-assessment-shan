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

//fetch product with product id
const apiFetchProduct = async (id) => {
  const response = await httpClient().get(`${PRODUCTS.GET}/${id}`);
  return response;
};

//fetch users with user id
const apiGetUser = async (id) => {
  const response = await httpClient().get(`${USERS.GET}/${id}`);
  return response;
};
export { apiFetchProduct, apiFetchProducts, apiGetUser, apiLogin };
