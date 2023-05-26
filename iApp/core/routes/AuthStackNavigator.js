import React from 'react';

import {
  ForgotPassword,
  LoginScreen,
  RegisterScreen
} from 'components/screens';
import { AUTH_NAGINATIONS } from 'core/constants/routes';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  const accessToken = false;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {accessToken ? (
        <Stack.Screen name="AppStack" component={AppStack} options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name={AUTH_NAGINATIONS.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name={AUTH_NAGINATIONS.REGISTER} component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name={AUTH_NAGINATIONS.FORGOT_PASSWORD}
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
