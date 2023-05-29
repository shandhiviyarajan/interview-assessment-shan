import React from 'react';

import { Box, Button, Text, Wrapper } from 'components/atoms';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';
import { useSelector } from 'react-redux';
const CartPage = ({ navigation }) => {
  const checkOut = () => {
    navigation.navigate(TAB_NAVIGATIONS.CHECKOUT, {});
  };
  const { Colors, Gutters } = useAppTheme();
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <Wrapper paddingH={Gutters.xl}>
      <Box flex={3}>
        {cartItems &&
          cartItems.map((item) => (
            <Text>
              {item.qty} {item.product.title}
            </Text>
          ))}
      </Box>
      <Box justifyContent="flex-end" height={44} pb={Gutters.md}>
        <Button width="100%" onPress={checkOut}>
          <Text color={Colors.Light}>Checkout</Text>
        </Button>
      </Box>
    </Wrapper>
  );
};

export default CartPage;
