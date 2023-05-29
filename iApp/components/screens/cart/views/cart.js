import React from 'react';

import { Box, Button, Spacer, Text, Wrapper } from 'components/atoms';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';

import { actionRemoveFromCart } from '../redux/cart.actions';
const CartPage = ({ navigation }) => {
  const checkOut = () => {
    navigation.navigate(TAB_NAVIGATIONS.CHECKOUT, {});
  };
  const { Colors, Gutters, FontSize } = useAppTheme();
  const cartItems = useSelector((state) => state.cart.cart);

  const dispatchAction = useDispatch();

  const removeItem = (id) => {
    let newCart = cartItems.filter((ci) => ci.product.id !== id);
    dispatchAction(actionRemoveFromCart(newCart));
  };

  return (
    <Wrapper paddingH={Gutters.xl}>
      <Box flex={3} width="100%">
        {cartItems &&
          cartItems.map((item) => (
            <Box
              direction="row"
              alignItems="center"
              pb={Gutters.md}
              pt={Gutters.md}
              mb={Gutters.md}
              backgroundColor={Colors.Light}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.LightGrey
              }}
            >
              <FastImage
                style={{ width: '20%', height: 60, marginRight: Gutters.md }}
                source={{
                  uri: item.product.thumbnail,
                  priority: FastImage.priority.normal
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <Box direction="row" alignItems="center" justifyContent="space-between" width="70%" pr={Gutters.lg}>
                <Box direction="column">
                  <Text fontSize={FontSize.h4}>{item.product.title}</Text>
                  <Spacer space={3} />
                  <Text color={Colors.Primary} fontSize={FontSize.xs}>
                    Quantity {item.qty}
                  </Text>
                  <Spacer space={3} />
                  <TouchableOpacity onPress={() => removeItem(item.product.id)}>
                    <Text color={Colors.Error}>Delete</Text>
                  </TouchableOpacity>
                </Box>
                <Text>{item.product.price} $</Text>
              </Box>
            </Box>
          ))}
      </Box>
      <Box justifyContent="flex-end" height={44} pb={Gutters.md}>
        <Button width="100%" onPress={checkOut} disabled={cartItems && cartItems.length === 0}>
          <Text color={Colors.Light}>Checkout</Text>
        </Button>
      </Box>
    </Wrapper>
  );
};

export default CartPage;
