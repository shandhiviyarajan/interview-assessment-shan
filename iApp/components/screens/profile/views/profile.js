import React from 'react';

import { Box, Button, Text, Wrapper } from 'components/atoms';
import { logoutUser } from 'components/screens/auth/redux/authSlice';
import { useAppTheme } from 'core/theme';
import { useDispatch } from 'react-redux';
const ProfilePage = () => {
  const { Colors, Gutters } = useAppTheme();
  const dispatchAction = useDispatch();
  const logout = () => {
    dispatchAction(logoutUser());
  };
  return (
    <Wrapper paddingH={Gutters.xl}>
      <Box flex={3}>
        <Text>Profile information</Text>
      </Box>

      <Box justifyContent="flex-end" height={44} pb={Gutters.md}>
        <Button width="100%" onPress={logout}>
          <Text color={Colors.Light}>Logout</Text>
        </Button>
      </Box>
    </Wrapper>
  );
};

export default ProfilePage;
