import React from 'react';
import {Button, Text, View} from 'react-native';

export const DrugsScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>لیست داروها</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
