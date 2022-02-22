import React, {useState} from 'react';
import {Button, Text, View, TextInput} from 'react-native';

export const LabScreen = ({navigation}: any) => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>لیست آزمایشگاه ها</Text>
      <TextInput
        value={text}
        onChangeText={(txt: string) => setText(txt)}></TextInput>
      <Text>{text}</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
