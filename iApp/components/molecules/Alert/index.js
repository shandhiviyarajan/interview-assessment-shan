import React from 'react';

import { Box, Text } from 'components/atoms';
import { useAppTheme } from 'core/theme';
export const AlertMessage = () => {
  const theme = useAppTheme();
  return (
    <Box>
      <Text fontSize={theme.FontSize.md}>Alert Title</Text>
    </Box>
  );
};
