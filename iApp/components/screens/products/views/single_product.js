import React from 'react';

import { AppSlider, Box, Button, Spacer, Text, Wrapper } from 'components/atoms';
import { FeedbackStars, ProductSlider } from 'components/molecules';
import { actionAddToCart } from 'components/screens/cart/redux/cart.actions';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';
import { useDispatch, useSelector } from 'react-redux';

import { useRoute } from '@react-navigation/native';

import { actionFetchProduct } from '../redux/product.actions';
function SingleProductPage({ navigation }) {
  const { FontSize, Colors, Gutters } = useAppTheme();
  //@TODO clean selectors
  const { data, isLoading } = useSelector((state) => state.product.product);
  const cartItems = useSelector((state) => state.cart.cart);
  const [qty, setQty] = React.useState(1);
  const { params } = useRoute();
  const dispatchAction = useDispatch();

  React.useEffect(() => {
    if (params && params.product) {
      dispatchAction(actionFetchProduct(params.product.id));
    }
  }, [params]);

  const addToCart = () => {
    navigation.jumpTo(TAB_NAVIGATIONS.CART);

    if (cartItems.length) {
      let updatedCart =
        cartItems.length > 0 &&
        cartItems.map((ci) => {
          if (ci.product.id === params.product.id) {
            return {
              product: params.product,
              qty: ci.qty + qty
            };
          } else {
            return ci;
          }
        });

      dispatchAction(actionAddToCart(updatedCart));
    } else {
      dispatchAction(
        actionAddToCart([
          ...cartItems,
          {
            product: params.product,
            qty
          }
        ])
      );
    }
  };

  const onValueChange = (value) => {
    setQty(parseInt(value));
  };
  return (
    <>
      {<Text>{JSON.stringify(cartItems)}</Text>}
      {isLoading && <Wait />}
      {!isLoading && data && <ProductSlider data={data.images} />}
      {!isLoading && (
        <Wrapper paddingH={Gutters.xl}>
          {data && (
            <>
              <Spacer />
              <Text fontSize={FontSize.h2}>
                {data.brand} {data.title}
              </Text>
              <Text fontSize={FontSize.h4} color={Colors.Dark}>
                {data.description}
              </Text>
              <Spacer />

              <Box justifyContent="space-between" direction="row" pb={16}>
                <Text fontSize={FontSize.md} color={Colors.Dark}>
                  Price
                </Text>
                <Text fontSize={FontSize.md} color={Colors.Primary}>
                  {data.price}$
                </Text>
              </Box>

              <Box alignItems="center" justifyContent="space-between" direction="row" pb={16}>
                <Text fontSize={FontSize.md} color={Colors.Dark}>
                  Rating
                </Text>
                <FeedbackStars rating={data.rating} />
              </Box>

              <Box flex={0} width="100%" pb={Gutters.xl} justifyContent="center" alignItems="center">
                <Text fontSize={FontSize.md} color={Colors.Primary} textAlign="center">
                  Quantity {qty}
                </Text>
                <AppSlider onValueChange={onValueChange} max={params.product.stock} />
              </Box>
            </>
          )}
          <Button onPress={() => addToCart()} width="100%">
            <Text color={Colors.Light}>Add to cart ({qty})</Text>
          </Button>
        </Wrapper>
      )}
    </>
  );
}

export default SingleProductPage;
