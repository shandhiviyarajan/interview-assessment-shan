import React from 'react';

import { Box, Button, Text, Wrapper } from 'components/atoms';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';

import { useRoute } from '@react-navigation/native';
const CartPage = ({ navigation }) => {
  const checkOut = () => {
    navigation.navigate(TAB_NAVIGATIONS.CHECKOUT, {});
  };
  const route = useRoute();
  const { Colors, Gutters } = useAppTheme();
  return (
    <Wrapper paddingH={Gutters.xl}>
      <Box flex={5}>
        <Text>{JSON.stringify(route)}</Text>
        <Text>{JSON.stringify(route)}</Text>
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
