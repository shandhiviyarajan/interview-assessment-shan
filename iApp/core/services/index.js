const { httpClient } = require('core/interceptors');

const AUTH = {
  LOGIN: '/auth/login'
};
const apiLogin = async (data) => {
  const response = await httpClient().post(AUTH.LOGIN, data);
  return response;
};

export { apiLogin };
