import React from 'react';

import { ProductItem } from 'components/molecules';

import { ProductListStyled } from './productList.styled';
export const ProductsList = ({ products }) => {
  const getItem = (data, index) => {
    return data[index];
  };

  return (
    <ProductListStyled
      data={products?.products}
      initialNumToRender={10}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id}
      getItemCount={() => products?.products.length}
      getItem={getItem}
    />
  );
};
