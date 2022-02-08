import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

export const DrugsScreen = ({navigation, route}: any) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'داروهای دسته ' + route.params.persianName,
    });
  }, []);

  return (
    <View>
      <Text>لیست داروها</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
