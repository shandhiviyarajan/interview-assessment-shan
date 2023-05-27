import React from 'react';

import { Wrapper } from 'components/atoms';
import { ProductsList } from 'components/organisms';
import { useAppTheme } from 'core/theme';
const ProductsPage = () => {
  const { Gutters } = useAppTheme();
  return (
    <Wrapper paddingH={Gutters.xl}>
      <ProductsList />
    </Wrapper>
  );
};

export default ProductsPage;
