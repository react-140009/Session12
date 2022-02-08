import React from 'react';
import {Button, Text, View} from 'react-native';

export const HelpScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>رهنما</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
