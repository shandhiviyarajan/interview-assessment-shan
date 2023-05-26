import React from 'react';

import { AddIcon } from 'components/icons';
import {
  CartPage,
  ProductsPage,
  ProfilePage
} from 'components/screens';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { Host } from 'react-native-portalize';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export const AppStackNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Host>
      <Tab.Navigator
        initialRouteName={TAB_NAVIGATIONS.PRODUCTS}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false
        })}
      >
        <Tab.Screen
          name={TAB_NAVIGATIONS.PRODUCTS}
          component={ProductsPage}
          options={({ route, focused }) => ({
            tabBarIcon: <AddIcon />
          })}
        />
        <Tab.Screen
          name={TAB_NAVIGATIONS.CART}
          component={CartPage}
          options={({ focused }) => ({
            tabBarIcon: <AddIcon />
          })}
        />
        <Tab.Screen
          name={TAB_NAVIGATIONS.PROFILE}
          component={ProfilePage}
          options={({ focused }) => ({
            tabBarIcon: <AddIcon />,
            tabBarStyle: { display: 'none' }
          })}
        />
      </Tab.Navigator>
    </Host>
  );
};
