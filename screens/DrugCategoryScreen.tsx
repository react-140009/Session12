import React from 'react';
import {Button, Text, View} from 'react-native';

export const DrugCategoryScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>دسته دارو ها</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
