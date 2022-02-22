import React, {useState, useEffect} from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LabScreen = ({navigation}: any) => {
  const [text, setText] = useState('');

  useEffect(() => {
    //IIFE
    (async () => {
      try {
        const txt = await AsyncStorage.getItem('LabScreen_text');
        if (txt) {
          setText(txt);
        }
      } catch (e) {
        // saving error
      }
    })();
  });

  const changeText = async (txt: string) => {
    setText(txt);
    try {
      await AsyncStorage.setItem('LabScreen_text', txt);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View>
      <Text>لیست آزمایشگاه ها</Text>
      <TextInput value={text} onChangeText={changeText}></TextInput>
      <Text>{text}</Text>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
