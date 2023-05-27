import React from 'react';

import { Wrapper } from 'components/atoms';
import { ProductSlider } from 'components/molecules/productSlider';
function SingleProductPage() {
  return (
    <Wrapper justifyContent="center" alignItems="center">
      <ProductSlider />
    </Wrapper>
  );
}

export default SingleProductPage;
