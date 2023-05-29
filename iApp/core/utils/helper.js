import AsyncStorage from '@react-native-async-storage/async-storage';
const LinkNavigate = (screenName, params) => {
  return {
    screen: screenName,
    params: params
  };
};

const setAuthToken = (value) => {
  AsyncStorage.setItem('token', value);
};

const getAuthToken = async (value) => {
  const response = await AsyncStorage.getItem('token');
  return response;
};

const clearToken = () => {
  AsyncStorage.removeItem('token');
};

export { clearToken, getAuthToken, LinkNavigate, setAuthToken };
