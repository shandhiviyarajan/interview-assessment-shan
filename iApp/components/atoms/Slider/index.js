import React from 'react';

import { useAppTheme } from 'core/theme';

import Slider from '@react-native-community/slider';
export const AppSlider = ({ onValueChange, min = 1, max = 10, rest }) => {
  const { Colors } = useAppTheme();
  return (
    <Slider
      style={{ width: '100%', height: 40 }}
      minimumValue={min}
      maximumValue={max}
      minimumTrackTintColor={Colors.Primary}
      maximumTrackTintColor={Colors.Grey}
      onValueChange={onValueChange}
      {...rest}
    />
  );
};
