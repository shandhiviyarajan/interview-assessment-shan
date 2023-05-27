import React from 'react';
import {Text as TextElement, View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './Text.style';
import {colors} from '../../constants/colors';

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
  Mystyles,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        alignItems,
        justifyContent,
        flex,
        ...Mystyles,
      }}>
      <TextElement
        numberOfLines={numberOfLines}
        style={{
          fontSize,
          fontWeight,
          color,
          margin,
          marginTop,
          marginLeft,
          marginRight,
          marginBottom,
          lineHeight,
          fontStyle,
          textAlign,
          opacity,
        }}>
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
  opacity: PropTypes.number,
};

Text.defaultProps = {
  fontSize: 22,
  color: colors.black,
  fontWeight: 'normal',
  lineHeight: 54,
};
