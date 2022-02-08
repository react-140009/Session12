import React from 'react';
import {Button, Text, View} from 'react-native';

export const DrugstoreScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>لیست دارو خانه ها</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
