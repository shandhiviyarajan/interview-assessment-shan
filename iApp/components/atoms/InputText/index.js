import React from 'react';

import { useAppTheme } from 'core/theme';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
export const InputText = ({
  props,
  secureTextEntry,
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
  multiline
}) => {
  const theme = useAppTheme();
  return (
    <TextInput
      style={{
        ...stylesProps,
        fontSize: theme.FontSize.md,
        color,
        fontWeight,
        fontStyle,
        marginVertical,
        marginHorizontal,
        padding: theme.Gutters.md,
        borderRadius: theme.Radius.sm,
        borderColor: theme.Colors.LightGrey,
        shadowColor: theme.Colors.Dark,
        backgroundColor: theme.Colors.Light,
        width,
        height,
        marginBottom,
        marginLeft,
        marginRight,
        borderWidth: borderWidth ? borderWidth : 2
      }}
      ref={compRef}
      secureTextEntry={secureTextEntry}
      textAlign={align}
      placeholder={placeholder}
      placeholderTextColor={theme.Colors.LightGrey}
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
  secureTextEntry: PropTypes.string,
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
  multiline: PropTypes.bool
};

TextInput.defaultProps = {
  secureTextEntry: false,
  width: '100%',
  fontWeight: '500',
  fontStyle: 'normal',
  marginVertical: 0,
  align: 'left',
  value: '',
  placeholder: 'Placeholder',
  keyboardType: 'default'
};
