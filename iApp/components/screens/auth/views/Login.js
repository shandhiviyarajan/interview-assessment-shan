import React from 'react';

import { Box, Button, InputText, NavLink, Spacer, Text, Wrapper } from 'components/atoms';
import { AUTH_NAVIGATIONS } from 'core/constants/routes';
import { useAuthToken } from 'core/hooks';
import { useAppTheme } from 'core/theme';
import { LinkNavigate } from 'core/utils/helper';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import { actionLogin } from '../redux/authSlice';
const LoginScreen = () => {
  //app theme
  const theme = useAppTheme();
  const { Colors } = theme;
  //token
  const token = useAuthToken();

  const dispatchAction = useDispatch();

  const [payload, setPayload] = React.useState({
    username: 'kminchelle',
    password: '0lelplR'
  });

  const submit = () => {
    dispatchAction(actionLogin(payload));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1
      }}
    >
      <Wrapper alignItems="center" justifyContent="center" padding={36}>
        <Text fontSize={theme.FontSize.h2}>Login {token}</Text>
        <Spacer space={12} />
        <Box mb={16}>
          <InputText placeholder="Username" value={payload.username} />
        </Box>
        <Box mb={16}>
          <InputText placeholder="Password" value={payload.password} secureTextEntry />
        </Box>
        <Button width="100%" height={44} onPress={submit}>
          <Text color="#fff">Login</Text>
        </Button>
        <Spacer space={10} />
        <Text color={Colors.Dark}>Don't have an account ?</Text>
        <Spacer space={10} />

        <Button width="100%" height={44} backgroundColor={Colors.Secondary}>
          <Text color={Colors.Primary}>Register</Text>
        </Button>
        <Spacer />
        <NavLink to={LinkNavigate(AUTH_NAVIGATIONS.FORGOT_PASSWORD, {})}>Forgot Password ?</NavLink>
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
