import React from 'react';

import { Text, Wrapper } from 'components/atoms';

import { useRoute } from '@react-navigation/native';
const CartPage = () => {
  const route = useRoute();
  return (
    <Wrapper>
      <Text>{JSON.stringify(route)}</Text>
    </Wrapper>
  );
};

export default CartPage;
