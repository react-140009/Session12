import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const AboutUsScreen = ({navigation}: any) => {
  useEffect(() => {
    Geolocation.watchPosition(
      info => console.log(info),
      err => console.log('-->', err),
    );
  });
  const getLocation = () => {
    Geolocation.getCurrentPosition(info => console.log(info));
  };
  return (
    <View>
      <Text>About Us</Text>
      <Button title="get location" onPress={getLocation}></Button>

      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
