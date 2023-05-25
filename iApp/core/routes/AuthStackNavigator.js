import React from 'react';

import { LoginScreen } from 'components/screens';
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
        </>
      )}
    </Stack.Navigator>
  );
};
