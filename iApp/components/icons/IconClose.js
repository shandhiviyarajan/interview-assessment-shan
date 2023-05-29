import React from 'react';

import { useAppTheme } from 'core/theme';
import Icon from 'react-native-vector-icons/Ionicons';
const IconClose = ({ size = 44, color }) => {
  const theme = useAppTheme();
  let iconColor = color ? color : theme.Colors.Primary;
  return <Icon name="close" size={size} color={iconColor} />;
};

export default IconClose;
