import React from 'react';

import { InputText, Text, Wrapper } from 'components/atoms';
import { AUTH_NAGINATIONS } from 'core/constants/routes';
import { useAuthToken } from 'core/hooks';
import { apiLogin } from 'core/services';
import { useAppTheme } from 'core/theme';
import { LinkNavigate } from 'core/utils/helper';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Link } from '@react-navigation/native';
const LoginScreen = () => {
  const token = useAuthToken();

  const [payload, setPayload] = React.useState({
    username: 'kminchelle',
    password: '0lelplR'
  });

  const submitLogin = () => {
    apiLogin(payload).then((response) => {
      console.log(response.token);
    });
  };

  const theme = useAppTheme();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1
      }}
    >
      <Wrapper alignItems="center" justifyContent="center">
        <Text fontSize={theme.FontSize.h2}>Login Screen {token}</Text>
        <Link to={LinkNavigate(AUTH_NAGINATIONS.REGISTER, {})}>Register</Link>
        <InputText placeholder="Username" />
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
