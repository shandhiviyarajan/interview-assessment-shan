import React from 'react';

import { Wait } from 'components/molecules';
import { AUTH_NAVIGATIONS, TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAuth } from 'core/hooks';
import { useSelector } from 'react-redux';
import { CartPage, CheckoutPage, ForgotPassword, LoginScreen, RegisterScreen, ResetPasswordPage } from 'screens';

import { createStackNavigator } from '@react-navigation/stack';

import { AppTabNavigator } from './AppTabNavigator';
const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  const auth = useSelector((state) => state.user.auth);
  const { isLoading } = useAuth();

  return (
    <>
      {isLoading && <Wait />}
      {!isLoading && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {auth && auth.token ? (
            <>
              <Stack.Screen name={TAB_NAVIGATIONS.NAME} component={AppTabNavigator} options={{ headerShown: false }} />
              <Stack.Screen name={TAB_NAVIGATIONS.CART} component={CartPage} options={{ headerShown: false }} />
              <Stack.Screen
                name={TAB_NAVIGATIONS.CHECKOUT}
                component={CheckoutPage}
                options={{ headerShown: true, headerBackTitleVisible: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name={AUTH_NAVIGATIONS.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen
                name={AUTH_NAVIGATIONS.REGISTER}
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={AUTH_NAVIGATIONS.FORGOT_PASSWORD}
                component={ForgotPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={AUTH_NAVIGATIONS.RESET_PASSWORD}
                component={ResetPasswordPage}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      )}
    </>
  );
};
