import { Box, Hr, Text } from 'components/base/foundation';
import { router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

const Support = ({
  navigation,
}: {
  navigation: any;
}) => {
  const openPrivacyPolicy = () => router.push('/Privacy');
  const openTermsAndCondition = () => router.push('/Terms');
  const openHelpDesck = () => router.push('/HelpDesk');
  return (
    <Box backgroundColor="levelOneBg">
      <Pressable p={4} onPress={openHelpDesck}>
        <Text>Help Desk</Text>
      </Pressable>
      <Hr />
      <Pressable p={4} onPress={openPrivacyPolicy}>
        <Text>Privacy Policy</Text>
      </Pressable>
      <Hr />
      <Pressable p={4} onPress={openTermsAndCondition}>
        <Text>Terms & Conditions</Text>
      </Pressable>
    </Box>
  );
};

export default Support;
