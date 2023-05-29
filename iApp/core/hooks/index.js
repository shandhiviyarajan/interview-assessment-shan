//custom hooks
import React from 'react';

import { actionLoginSuccess } from 'components/screens/auth/redux/authSlice';
import store from 'core/store';
import { getAuthToken } from 'core/utils/helper';
//get auth token

const useAuth = () => {
  const [auth, setToken] = React.useState({
    user: null,
    isLoading: true
  });

  React.useEffect(() => {
    const getToken = async () => {
      const value = await getAuthToken();
      setTimeout(() => {
        setToken({
          user: value,
          isLoading: false
        });

        store.dispatch(actionLoginSuccess(value));
      }, 2000);
    };
    getToken();
  }, []);
  return auth;
};

export { useAuth };
