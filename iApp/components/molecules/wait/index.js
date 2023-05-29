import React from 'react';

import { Spacer, Text, Wrapper } from 'components/atoms';
import { useAppTheme } from 'core/theme';
import { ActivityIndicator } from 'react-native';
function Wait() {
  const theme = useAppTheme();
  return (
    <Wrapper justifyContent="center" alignItems="center">
      <Text color={theme.Colors.Primary} fontSize={theme.FontSize.h4}>
        Please wait...
      </Text>
      <Spacer></Spacer>
      <ActivityIndicator color={theme.Colors.Primary} size="large" />
    </Wrapper>
  );
}

export { Wait };
