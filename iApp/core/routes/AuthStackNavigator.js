import React from 'react';

import { ForgotPassword, LoginScreen, RegisterScreen } from 'components/screens';
import CheckoutPage from 'components/screens/cart/checkout';
import { AUTH_NAGINATIONS, TAB_NAVIGATIONS } from 'core/constants/routes';

import { createStackNavigator } from '@react-navigation/stack';

import { AppTabNavigator } from './AppTabNavigator';
const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  const accessToken = false;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {accessToken ? (
        <>
          <Stack.Screen name={TAB_NAVIGATIONS.NAME} component={AppTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen
            name={TAB_NAVIGATIONS.CHECKOUT}
            component={CheckoutPage}
            options={{ headerShown: true, headerBackTitleVisible: false }}
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
