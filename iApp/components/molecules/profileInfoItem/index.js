import React from 'react';

import { Box, Text } from 'components/atoms';
import { useAppTheme } from 'core/theme';
const ProfileInfoItem = ({ value, label, icon }) => {
  const { Colors, Gutters } = useAppTheme();
  return (
    <Box direction="row" justifyContent="flex-start" alignItems="center" pb={Gutters.md} pt={Gutters.md}>
      {icon}
      <Text fontWeigh="bold" color={Colors.Primary} paddingRight={Gutters.md} paddingLeft={Gutters.sm}>
        {label}
      </Text>
      <Text>{value}</Text>
    </Box>
  );
};

export { ProfileInfoItem };
