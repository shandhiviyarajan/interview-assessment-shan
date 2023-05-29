import React from 'react';

import { useAppTheme } from 'core/theme';
import Icon from 'react-native-vector-icons/Ionicons';
const IconProfile = ({ size = 44, color }) => {
  const theme = useAppTheme();
  let iconColor = color ? color : theme.Colors.Dark;
  return <Icon name="person" size={size} color={iconColor} />;
};

export default IconProfile;
