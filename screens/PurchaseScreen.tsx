import React from 'react';
import {Button, Text, View, Linking} from 'react-native';

export const PurchaseScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>خرید اشتراک</Text>
      <Button
        title="خرید"
        onPress={() =>
          Linking.openURL('https://192.168.174.140:44364/PaymentGateway/send')
        }></Button>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
