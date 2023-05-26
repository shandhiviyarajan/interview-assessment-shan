import React from 'react';

import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { LinkNavigate } from 'core/utils/helper';
import {
  Text,
  View
} from 'react-native';

import { Link } from '@react-navigation/native';
const ProductsPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Products Page</Text>
      <Link to={LinkNavigate(TAB_NAVIGATIONS.SINGLE_PRODUCT, {})}>Single Product</Link>
    </View>
  );
};

export default ProductsPage;
