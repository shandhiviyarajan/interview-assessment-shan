import React from 'react';

import { ProductItem } from 'components/molecules';

import { ProductListStyled } from './productList.styled';
export const ProductsList = () => {
  const getItem = (data, index) => {
    return data;
  };
  return (
    <ProductListStyled
      initialNumToRender={6}
      renderItem={({ item }) => <ProductItem />}
      keyExtractor={(item) => item}
      getItemCount={() => 10}
      getItem={getItem}
    />
  );
};
