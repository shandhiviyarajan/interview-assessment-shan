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
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  paddingBottom,
  paddingLeft,
  paddingRight,
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
        flex,
        alignItems,
        justifyContent
      }}
    >
      <TextElement
        numberOfLines={numberOfLines}
        style={{
          fontSize: fontSize || theme.FontSize.sm,
          fontWeight,
          color: color || theme.Colors.Dark,
          paddingBottom,
          paddingLeft,
          paddingRight,
          marginTop,
          marginLeft,
          marginRight,
          marginBottom,
          lineHeight,
          fontStyle,
          textAlign,
          opacity,
          ...styles
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
  lineHeight: 0,
  textAlign: 'left'
};
