import React from 'react';

import { Button, Text, Wrapper } from 'components/atoms';
import { ProductSlider } from 'components/molecules';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';
function SingleProductPage({ navigation }) {
  const { Colors } = useAppTheme();
  const addToCart = () => {
    navigation.jumpTo(TAB_NAVIGATIONS.CART, {
      name: 'From Single Product'
    });
  };
  return (
    <Wrapper justifyContent="center" alignItems="center">
      <ProductSlider />
      <Button onPress={() => addToCart()}>
        <Text color={Colors.Light}>Add to cart</Text>
      </Button>
    </Wrapper>
  );
}

export default SingleProductPage;
