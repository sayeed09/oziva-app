import { Image } from 'expo-image';
import * as React from 'react';
import { Platform } from 'react-native';
import { UPI } from 'utils/images';

const UPIIconComponent = () => {
  return <>
    {Platform.OS == "android" ?
      <Image source={{ uri: UPI }} style={{ height: 30, width: 30 }} /> :
      <Image source={{ uri: UPI }} style={{ height: 30, width: 30 }} />
    }

  </>
}
export default UPIIconComponent;
