import React from 'react';

import { Box, Text } from 'components/atoms';
import { useAppTheme } from 'core/theme';
export const AlertMessage = ({ type = 'default', title, message }) => {
  const theme = useAppTheme();
  return (
    <Box
      style={{
        backgroundColor: theme.Colors.ErrorLight,
        paddingBottom: 12,
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 8,
        position: 'absolute',
        top: 96
      }}
    >
      {title && (
        <Text color={theme.Colors.Light} fontSize={16}>
          {title}
        </Text>
      )}
      {message && (
        <Text color={theme.Colors.Light} fontSize={12}>
          {message}
        </Text>
      )}
    </Box>
  );
};
