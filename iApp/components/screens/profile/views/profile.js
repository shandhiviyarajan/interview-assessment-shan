import React from 'react';

import { Box, Button, Spacer, Text, Wrapper } from 'components/atoms';
import { IconAdd } from 'components/icons';
import { ProfileInfoItem } from 'components/molecules/profileInfoItem';
import { logoutUser } from 'components/screens/auth/redux/authSlice';
import { useAppTheme } from 'core/theme';
import { ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';

import { useFocusEffect } from '@react-navigation/native';

import { actionFetchUser } from '../redux/user.actions';
const ProfilePage = () => {
  const { Colors, Gutters, FontSize } = useAppTheme();
  const dispatchAction = useDispatch();

  //logout
  const logout = () => {
    dispatchAction(logoutUser());
  };
  //auth payload
  const payload = useSelector((state) => state.user.auth.data);
  //profile
  const profile = useSelector((state) => state.profile.profile.data);
  //fetch user info
  useFocusEffect(
    React.useCallback(() => {
      if (payload) {
        dispatchAction(actionFetchUser(payload.id));
      }
    }, [payload])
  );
  return (
    <Wrapper paddingH={Gutters.xl}>
      <>
        <Box flex={3}>
          {profile && (
            <ScrollView contentContainerStyle={{ flex: 1 }}>
              <Spacer />
              <Box alignItems="center">
                <Box
                  justifyContent="center"
                  alignItems="center"
                  mb={Gutters.lg}
                  style={{
                    backgroundColor: '#f1f1f1',
                    borderRadius: 100,
                    width: 120,
                    height: 120
                  }}
                >
                  <FastImage
                    style={{ width: 80, height: 80 }}
                    source={{
                      uri: profile.image,
                      priority: FastImage.priority.normal
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </Box>

                <Text fontSize={FontSize.h3}>
                  {profile.firstName} {profile.lastName}
                </Text>
                <Spacer />
              </Box>

              {profile && (
                <>
                  <ProfileInfoItem value={profile.birthDate} label="Birth date" icon={<IconAdd size={24} />} />
                  <ProfileInfoItem value={profile.gender} label="Gender" icon={<IconAdd size={24} />} />
                  <ProfileInfoItem value={profile.phone} label="Contact" icon={<IconAdd size={24} />} />
                  <ProfileInfoItem value={profile.university} label="Stuies at" icon={<IconAdd size={24} />} />
                  <ProfileInfoItem value={profile.address.city} label="From" icon={<IconAdd size={24} />} />
                  <ProfileInfoItem value={profile.company.name} label="Work at" icon={<IconAdd size={24} />} />
                  <ProfileInfoItem value={profile.company.title} label="Work as a" icon={<IconAdd size={24} />} />
                </>
              )}
            </ScrollView>
          )}
        </Box>

        <Box justifyContent="flex-end" height={44} pb={Gutters.md}>
          <Button width="100%" onPress={logout}>
            <Text color={Colors.Light}>Logout</Text>
          </Button>
        </Box>
      </>
    </Wrapper>
  );
};

export default ProfilePage;
