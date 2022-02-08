import React from 'react';
import {Button, Text, View} from 'react-native';

export const LabScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>لیست آزمایشگاه ها</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
