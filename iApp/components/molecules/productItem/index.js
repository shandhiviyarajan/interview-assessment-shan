import React from 'react';

import { Box, Text } from 'components/atoms';
import { TAB_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { useLinkTo } from '@react-navigation/native';
export const ProductItem = () => {
  const theme = useAppTheme();
  const linkTo = useLinkTo();
  return (
    <Box pb={24}>
      <TouchableOpacity
        onPress={() => {
          linkTo(`/${TAB_NAVIGATIONS.SINGLE_PRODUCT}`);
        }}
      >
        <Text color={theme.Colors.Dark} fontSize={theme.FontSize.h2}>
          iPhone 9
        </Text>
        <Text color={theme.Colors.Grey}>An apple mobile which is nothing like apple</Text>
        <FastImage
          style={{ width: '100%', height: 200 }}
          source={{
            uri: 'https://placehold.co/600x400.png',
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    </Box>
  );
};
