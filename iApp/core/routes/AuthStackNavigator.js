import React from 'react';

import {
  ForgotPassword,
  LoginScreen,
  RegisterScreen,
  SingleProductPage
} from 'components/screens';
import {
  AUTH_NAGINATIONS,
  TAB_NAVIGATIONS
} from 'core/constants/routes';

import { createStackNavigator } from '@react-navigation/stack';

import { AppStackNavigator } from './AppStackNavigator';
const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  const accessToken = true;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {accessToken ? (
        <>
          <Stack.Screen
            name={TAB_NAVIGATIONS.PRODUCTS}
            component={AppStackNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={TAB_NAVIGATIONS.SINGLE_PRODUCT}
            component={SingleProductPage}
            options={{ headerShown: false }}
          />
        </>
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
