import React from 'react';

import { useAuthToken } from 'core/hooks';
import {
  Text,
  View
} from 'react-native';
const LoginScreen = () => {
  const token = useAuthToken();
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;
