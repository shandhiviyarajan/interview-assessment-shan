import React from 'react';

import { AddIcon } from 'components/icons';
import { CartPage, ProfilePage } from 'components/screens';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { Host } from 'react-native-portalize';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProductStackNavigator } from './ProductStackNavigator';
const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <Host>
      <Tab.Navigator
        initialRouteName={TAB_NAVIGATIONS.PRODUCTS}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: true
        })}
      >
        <Tab.Screen
          name={TAB_NAVIGATIONS.PRODUCTS}
          component={ProductStackNavigator}
          options={({ route, focused }) => ({
            tabBarIcon: () => <AddIcon />,
            headerShown: false
          })}
        />
        <Tab.Screen
          name={TAB_NAVIGATIONS.CART}
          component={CartPage}
          options={({ focused }) => ({
            tabBarIcon: () => <AddIcon />
          })}
        />
        <Tab.Screen
          name={TAB_NAVIGATIONS.PROFILE}
          component={ProfilePage}
          options={({ focused }) => ({
            tabBarIcon: () => <AddIcon />
          })}
        />
      </Tab.Navigator>
    </Host>
  );
};
