import React from 'react';

import { Wrapper } from 'components/atoms';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { LinkNavigate } from 'core/utils/helper';
import { Text } from 'react-native';

import { Link } from '@react-navigation/native';
const ProductsPage = () => {
  return (
    <Wrapper justifyContent="center" alignItems="center">
      <Text>Products Page</Text>
      <Link to={LinkNavigate(TAB_NAVIGATIONS.SINGLE_PRODUCT, {})}>Single Product</Link>
    </Wrapper>
  );
};

export default ProductsPage;
