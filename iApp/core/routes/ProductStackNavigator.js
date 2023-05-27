import React from 'react';

import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { ProductsPage, SingleProductPage } from 'screens';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export const ProductStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName={TAB_NAVIGATIONS.PRODUCTS}>
      <Stack.Screen
        name={TAB_NAVIGATIONS.PRODUCTS}
        component={ProductsPage}
        options={{ headerShown: true, title: 'Products' }}
      />
      <Stack.Screen
        name={TAB_NAVIGATIONS.SINGLE_PRODUCT}
        component={SingleProductPage}
        options={{
          title: '',
          headerBackTitleVisible: false
        }}
      />
    </Stack.Navigator>
  );
};
