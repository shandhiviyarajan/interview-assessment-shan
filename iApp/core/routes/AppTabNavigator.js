import React from 'react';

import { IconCart, IconHome, IconProfile } from 'components/icons';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { Host } from 'react-native-portalize';
import { CartPage, ProfilePage } from 'screens';

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
            tabBarIcon: () => <IconHome size={32} />,
            headerShown: false
          })}
        />
        <Tab.Screen
          name={TAB_NAVIGATIONS.CART}
          component={CartPage}
          options={({ focused }) => ({
            tabBarIcon: () => <IconCart size={32} />
          })}
        />
        <Tab.Screen
          name={TAB_NAVIGATIONS.PROFILE}
          component={ProfilePage}
          options={({ focused }) => ({
            tabBarIcon: () => <IconProfile size={32} />
          })}
        />
      </Tab.Navigator>
    </Host>
  );
};
