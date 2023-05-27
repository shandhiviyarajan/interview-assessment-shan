import React from 'react';

import { useAppTheme } from 'core/theme';
import { View } from 'react-native';
export const Wrapper = ({
  children,
  flex = 1,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  alignContent = 'flex-start',
  backgroundColor,
  padding,
  paddingH,
  style,
  ...rest
}) => {
  const theme = useAppTheme();
  return (
    <View
      {...rest}
      style={{
        justifyContent,
        alignContent,
        alignItems,
        flex,
        padding,
        paddingHorizontal: paddingH,
        backgroundColor: backgroundColor ? backgroundColor : theme.Colors.Light,
        ...style
      }}
    >
      {children}
    </View>
  );
};
