import React from 'react';

import { Box, Spacer, Text, Wrapper } from 'components/atoms';
import { useAppTheme } from 'core/theme';
import { TouchableWithoutFeedback } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import { useSelector } from 'react-redux';

import { useFocusEffect } from '@react-navigation/native';
function CheckoutPage() {
  const { Gutters, FontSize, Colors } = useAppTheme();
  const cartItems = useSelector((state) => state.cart.cart);
  const [totalValue, setTotal] = React.useState(0);
  useFocusEffect(
    React.useCallback(() => {
      let total = 0;
      cartItems.map((item) => {
        total += item.product.price * item.qty;
      });

      setTotal(total);
    }, [])
  );

  const options = ['Cash on delivery'];

  function renderOption(option, index) {
    return (
      <TouchableWithoutFeedback key={index}>
        <Text>{option}</Text>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <Wrapper paddingH={Gutters.md} justifyContent="center" alignItems="center">
      <Text fontSize={FontSize.h4}>Total</Text>
      <Text fontSize={FontSize.h2}>${totalValue}</Text>
      <Spacer />
      <Box>
        <Text color={Colors.Primary}>Payment Method</Text>
        <Spacer space={4} />
        <Box pl={Gutters.xl}>
          <RadioButtons options={options} onSelection={() => {}} renderOption={renderOption} />
        </Box>
      </Box>
    </Wrapper>
  );
}

export default CheckoutPage;
