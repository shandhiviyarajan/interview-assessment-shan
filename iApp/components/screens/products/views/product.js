import React from 'react';

import { Wrapper } from 'components/atoms';
import { ProductsList } from 'components/organisms';
import { useAppTheme } from 'core/theme';
const ProductsPage = () => {
  const { Gutters } = useAppTheme();
  return (
    <Wrapper justifyContent="flex-start" alignItems="flex-start" paddingH={Gutters.xl}>
      <ProductsList />
    </Wrapper>
  );
};

export default ProductsPage;
