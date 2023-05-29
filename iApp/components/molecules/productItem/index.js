import React from 'react';

import { Box, Spacer, Text } from 'components/atoms';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { useLinkTo, useNavigation } from '@react-navigation/native';
export const ProductItem = ({ item }) => {
  const theme = useAppTheme();
  const linkTo = useLinkTo();
  const [product, setProduct] = React.useState(item);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={product.id}
      onPress={() => {
        navigation.navigate(`${TAB_NAVIGATIONS.SINGLE_PRODUCT}`, {
          product
        });
      }}
    >
      <Box pb={24}>
        <Text color={theme.Colors.Dark} fontSize={theme.FontSize.h3}>
          {product.brand} {product.title}
        </Text>
        <Text fontSize={theme.FontSize.sm} color={theme.Colors.Grey}>
          {product.description}
        </Text>
        <Spacer space={4} />
        <FastImage
          style={{ width: '100%', height: 180 }}
          source={{
            uri: product.thumbnail,
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </Box>
    </TouchableOpacity>
  );
};
