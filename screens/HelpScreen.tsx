import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

export const HelpScreen = ({navigation}: any) => {
  useEffect(() => {
    // (async () => {
    //   const cameraPermission = await Camera.getCameraPermissionStatus();
    //   const microphonePermission = await Camera.getMicrophonePermissionStatus();
    //   if (cameraPermission !== 'authorized') {
    //     const newCameraPermission = await Camera.requestCameraPermission();
    //   }
    //   if (microphonePermission !== 'authorized') {
    //     const newCameraPermission = await Camera.requestMicrophonePermission();
    //   }
    // })();
  });

  // const devices = useCameraDevices();
  // const device = devices.back;

  return (
    <View>
      <Text>camera</Text>
      {/* <Camera style={StyleSheet.absoluteFill} isActive={true} device={device} /> */}
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
