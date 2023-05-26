import React from 'react';

import { AUTH_NAGINATIONS } from 'core/constants/routes';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <Stack.Screen name={AUTH_NAGINATIONS.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={AUTH_NAGINATIONS.REGISTER} component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name={AUTH_NAGINATIONS.FORGOT_PASSWORD}
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </>
    </Stack.Navigator>
  );
};
