//custom hooks
import React from 'react';

import { getAuthToken } from 'core/utils/helper';
//get auth token
const useAuth = () => {
  const [auth, setToken] = React.useState({
    token: null,
    isLoading: true
  });

  React.useEffect(() => {
    const getToken = async () => {
      const value = await getAuthToken();
      console.log('vlaue', value);
      setTimeout(() => {
        setToken({
          token: value,
          isLoading: false
        });
      }, 3000);
    };
    getToken();
  }, []);
  return auth;
};

export { useAuth };
