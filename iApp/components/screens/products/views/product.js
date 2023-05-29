import React from 'react';

import { Wrapper } from 'components/atoms';
import { Wait } from 'components/molecules';
import { ProductsList } from 'components/organisms';
import { useAppTheme } from 'core/theme';
import { useDispatch, useSelector } from 'react-redux';

import { useFocusEffect } from '@react-navigation/native';

import { actionFetchProducts } from '../redux/products.actions';
const ProductsPage = () => {
  const { Gutters } = useAppTheme();
  const dispatchAction = useDispatch();
  const products = useSelector((state) => state.products.products);

  useFocusEffect(
    React.useCallback(() => {
      if (!products.data) {
        dispatchAction(actionFetchProducts());
      } else {
        dispatchAction(actionFetchProducts());
      }
    }, [])
  );
  return (
    <>
      {products.isLoading && <Wait />}
      {!products.isLoading && products.data && (
        <Wrapper paddingH={Gutters.xl}>
          <ProductsList products={products.data} />
        </Wrapper>
      )}
    </>
  );
};

export default ProductsPage;
