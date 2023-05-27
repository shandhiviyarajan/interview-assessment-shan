import React from 'react';

import { useAppTheme } from 'core/theme';

import { Link } from '@react-navigation/native';
export const NavLink = ({ to, children, color, fontSize, style, rest }) => {
  const theme = useAppTheme();

  return (
    <Link
      to={to}
      style={{
        fontSize: fontSize ? fontSize : theme.FontSize.sm,
        color: color ? color : theme.Colors.Primary,
        ...style
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
