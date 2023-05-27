import React from 'react';

import { Button } from 'components/atoms/Button';
import { TextInput } from 'components/atoms/TextInput/TextInput';
import { AUTH_NAGINATIONS } from 'core/constants/routes';
import { useAuthToken } from 'core/hooks';
import { apiLogin } from 'core/services';
import { LinkNavigate } from 'core/utils/helper';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';

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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>Login Screen {token}</Text>
        <Link to={LinkNavigate(AUTH_NAGINATIONS.REGISTER, {})}>Register</Link>
        <TextInput
          value={payload.password}
          secureTextEntry
          placeholder="Password"
          defaultValue="0lelplR"
          style={{
            width: '70%',
            height: 44,
            fontSize: 16,
            borderColor: '#d8d8d8',
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 12
          }}
        />
        <Button>
          <Text>Login</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
