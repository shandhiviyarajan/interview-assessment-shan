// Import Axios library
import axios from 'axios';
// Create Axios instance
const api = axios.create({
  baseURL: 'https://dummyjson.com'
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const httpClient = () => {
  return api;
};

export { httpClient };
