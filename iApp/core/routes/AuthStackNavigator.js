import React from 'react';

import { AUTH_NAVIGATIONS, TAB_NAVIGATIONS } from 'core/constants/routes';
import { CartPage, CheckoutPage, ForgotPassword, LoginScreen, RegisterScreen } from 'screens';

import { createStackNavigator } from '@react-navigation/stack';

import { AppTabNavigator } from './AppTabNavigator';
const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  const accessToken = true;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {accessToken ? (
        <>
          <Stack.Screen name={TAB_NAVIGATIONS.NAME} component={AppTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name={TAB_NAVIGATIONS.CART + 'X'} component={CartPage} options={{ headerShown: false }} />
          <Stack.Screen
            name={TAB_NAVIGATIONS.CHECKOUT}
            component={CheckoutPage}
            options={{ headerShown: true, headerBackTitleVisible: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name={AUTH_NAVIGATIONS.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name={AUTH_NAVIGATIONS.REGISTER} component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name={AUTH_NAVIGATIONS.FORGOT_PASSWORD}
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
