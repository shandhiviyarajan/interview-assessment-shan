import React from 'react';

import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { LinkNavigate } from 'core/utils/helper';
import { Text, View } from 'react-native';

import { Link } from '@react-navigation/native';
const CartPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart Page</Text>
      <Link to={LinkNavigate(TAB_NAVIGATIONS.CHECKOUT, {})}>Check out</Link>
    </View>
  );
};

export default CartPage;
