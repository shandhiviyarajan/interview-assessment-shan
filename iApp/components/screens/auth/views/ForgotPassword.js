import React from 'react';

import { NavLink, Text, Wrapper } from 'components/atoms';
import { AUTH_NAVIGATIONS } from 'core/constants/routes';
import { useAppTheme } from 'core/theme';
import { LinkNavigate } from 'core/utils/helper';
const ForgotPassword = () => {
  const { FontSize } = useAppTheme();
  return (
    <Wrapper justifyContent="center" alignItems="center">
      <Text fontSize={FontSize.h2} style={{ fontSize: 24 }}>
        Forgot Password
      </Text>
      <NavLink to={LinkNavigate(AUTH_NAVIGATIONS.LOGIN, {})}>Login</NavLink>
    </Wrapper>
  );
};

export default ForgotPassword;
