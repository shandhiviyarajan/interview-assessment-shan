import React from 'react';

import { useAppTheme } from 'core/theme';
import PropTypes from 'prop-types';
import { Text as TextElement, View } from 'react-native';

import { styles } from './Text.style';
export const Text = ({
  children,
  fontSize,
  color,
  fontWeight,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  lineHeight,
  fontStyle,
  alignItems,
  justifyContent,
  textAlign,
  flex,
  numberOfLines,
  opacity,
  Mystyles
}) => {
  const theme = useAppTheme();
  return (
    <View
      style={{
        ...styles.container,
        alignItems,
        justifyContent,
        flex,
        ...Mystyles
      }}
    >
      <TextElement
        numberOfLines={numberOfLines}
        style={{
          fontSize: fontSize || theme.FontSize.md,
          fontWeight,
          color: color || theme.Colors.Dark,
          margin,
          marginTop,
          marginLeft,
          marginRight,
          marginBottom,
          lineHeight,
          fontStyle,
          textAlign,
          opacity
        }}
      >
        {children}
      </TextElement>
    </View>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  lineHeight: PropTypes.number,
  fontStyle: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  textAlign: PropTypes.string,
  flex: PropTypes.number,
  numberOfLines: PropTypes.number,
  opacity: PropTypes.number
};

Text.defaultProps = {
  fontWeight: '500',
  lineHeight: 44
};
