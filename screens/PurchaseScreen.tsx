import React from 'react';
import {Button, Text, View} from 'react-native';

export const PurchaseScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>خرید اشتراک</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
