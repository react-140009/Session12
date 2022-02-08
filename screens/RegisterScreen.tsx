import React from 'react';
import {Button, Text, TextInput, TextInputBase, View} from 'react-native';

export const RegisterScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>ثبت نام</Text>
      <Text> نام : </Text><TextInput  />
      <Text> نام خانوادگی : </Text><TextInput  />
      <Text>ایمیل : </Text><TextInput/>
      <Text>پسورد : </Text><TextInput/>
      <Button title="ثبت نام" onPress={() => navigation.pop()}></Button>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
