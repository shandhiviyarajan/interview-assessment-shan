import React from 'react';
import PropTypes from 'prop-types';
import {TextInput as TextInputElement} from 'react-native';

import {styles} from './TextInput.style';
import {colors} from '../../constants/colors';

export const TextInput = ({
  props,
  stylesProps,
  fontSize,
  color,
  fontWeight,
  fontStyle,
  marginVertical,
  marginHorizontal,
  padding,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  shadowColor,
  align,
  value,
  placeholder,
  onChangeText,
  placeholderTextColor,
  width,
  height,
  returnKeyType,
  keyboardType,
  marginBottom,
  marginLeft,
  compRef,
  blurOnSubmit,
  onSubmitEditing,
  autoFocus,
  marginRight,
  maxLength,
  multiline,
}) => {
  return (
    <TextInputElement
      style={{
        ...styles.input,
        ...stylesProps,
        fontSize,
        color,
        fontWeight,
        fontStyle,
        marginVertical,
        marginHorizontal,
        padding,
        borderRadius,
        borderColor,
        borderWidth,
        shadowColor,
        backgroundColor,
        width,
        height,
        marginBottom,
        marginLeft,
        marginRight,
      }}
      ref={compRef}
      textAlign={align}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
      blurOnSubmit={blurOnSubmit}
      onSubmitEditing={onSubmitEditing}
      autoFocus={autoFocus}
      maxLength={maxLength}
      multiline={multiline}
      {...props}
    />
  );
};

TextInput.propTypes = {
  props: PropTypes.object,
  stylesProps: PropTypes.object,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.string,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  padding: PropTypes.number,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  shadowColor: PropTypes.string,
  align: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  compRef: PropTypes.any,
  blurOnSubmit: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
  autoFocus: PropTypes.bool,
  marginRight: PropTypes.number,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
};

TextInput.defaultProps = {
  fontSize: 14,
  color: colors.lightBlack,
  fontWeight: '500',
  fontStyle: 'normal',
  marginVertical: 0,
  padding: 10,
  backgroundColor: colors.offWhite,
  borderRadius: 4,
  borderColor: colors.offWhite,
  borderWidth: 0,
  shadowColor: colors.black,
  align: 'left',
  value: '',
  placeholder: 'Placeholder',
  placeholderTextColor: colors.gray,
  keyboardType: 'default',
};
