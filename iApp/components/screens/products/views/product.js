import React from 'react';

import { Wrapper } from 'components/atoms';
import { ProductsList } from 'components/organisms';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';
import { LinkNavigate } from 'core/utils/helper';

import { Link } from '@react-navigation/native';
const ProductsPage = () => {
  const { Gutters } = useAppTheme();
  return (
    <Wrapper justifyContent="flex-start" alignItems="flex-start" paddingH={Gutters.xl}>
      <ProductsList />
      <Link to={LinkNavigate(TAB_NAVIGATIONS.SINGLE_PRODUCT, {})}>Single Product</Link>
    </Wrapper>
  );
};

export default ProductsPage;
