import React from 'react';

import { useAppTheme } from 'core/theme';
import Icon from 'react-native-vector-icons/Ionicons';
const IconAdd = ({ size = 44, color }) => {
  const theme = useAppTheme();
  let iconColor = color ? color : theme.Colors.Primary;
  return <Icon name="add-circle" size={size} color={iconColor} />;
};

export default IconAdd;
