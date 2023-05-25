import React from 'react';

import { AUTH_NAGINATIONS } from 'core/constants/routes';
import { LinkNavigate } from 'core/utils/helper';
import {
  Text,
  View
} from 'react-native';

import { Link } from '@react-navigation/native';
const RegisterScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ fontSize: 24 }}>Register Screen</Text>
      <Link to={LinkNavigate(AUTH_NAGINATIONS.LOGIN, {})}>Login</Link>
    </View>
  );
};

export default RegisterScreen;
