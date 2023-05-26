//custom hooks
import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
//get auth token
const useAuthToken = () => {
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    const getToken = async () => {
      const value = await AsyncStorage.getItem('token');
      setToken(value);
    };
    getToken();
  }, []);
  return token;
};

export { useAuthToken };
