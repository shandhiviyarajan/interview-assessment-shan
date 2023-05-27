import React from 'react';

import { useAppTheme } from 'core/theme';
import { View } from 'react-native';
const Spacer = ({ space }) => {
  const theme = useAppTheme();
  return (
    <View
      style={{
        padding: space ? space : theme.Gutters.Padding
      }}
    ></View>
  );
};

export default Spacer;
