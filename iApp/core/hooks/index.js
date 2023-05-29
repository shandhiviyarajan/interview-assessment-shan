//custom hooks
import React from 'react';

import { getAuthToken } from 'core/utils/helper';
//get auth token
const useAuthToken = () => {
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    const getToken = async () => {
      const value = getAuthToken();
      setToken(value);
    };
    getToken();
  }, []);
  return token;
};

export { useAuthToken };
