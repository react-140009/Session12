import React from 'react';
import {Button, Text, View} from 'react-native';

export const HospitalScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>لیست بیمارستان ها</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
