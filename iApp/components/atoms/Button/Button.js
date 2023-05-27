import React from 'react';

import { useAppTheme } from 'core/theme';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
export const Button = ({
  testID,
  children,
  onClick,
  display,
  justifyContent,
  alignItems,
  alignSelf,
  flexDirection,
  height,
  width,
  borderRadius,
  backgroundColor,
  marginVertical,
  disabled,
  marginTop,
  marginRight,
  marginLeft,
  borderColor,
  borderWidth,
  Mystyles
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onClick}
      disabled={disabled}
      style={{
        display,
        justifyContent,
        alignItems,
        alignSelf,
        flexDirection,
        height,
        width,
        borderRadius,
        backgroundColor,
        marginTop,
        marginRight,
        marginLeft,
        marginVertical,
        borderColor,
        borderWidth,
        ...Mystyles
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignSelf: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  marginVertical: PropTypes.number,
  disabled: PropTypes.bool,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginLeft: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number
};

Button.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  width: 200,
  height: 44,
  borderRadius: useAppTheme().Radius.sm,
  backgroundColor: useAppTheme().Primary,
  disabled: false
};
