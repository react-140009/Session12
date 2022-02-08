import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useToast, Box, Button, Spinner} from 'native-base';
import api from '../api';

export interface DrugCategoryModel {
  id: number;
  name: string;
  persianName: string;
}
export const DrugCategoryScreen = ({navigation}: any) => {
  const [data, setData] = useState<DrugCategoryModel[]>([]);
  const toast = useToast();
  useEffect(() => {
    //IIFE
    (async () => {
      try {
        let d = await (await api.get<DrugCategoryModel[]>('categories')).data;
        setData(d);
      } catch (e) {
        toast.show({
          description: 'اشکال در شبکه',
        });
      }
    })();
  }, []);

  return (
    <View>
      {data.length === 0 && <Spinner />}
      <FlatList
        data={data}
        renderItem={item => (
          <Box px={5} py={2}>
            <Button onPress={() => navigation.navigate('Drugs', item.item)}>
              {item.item.persianName}
            </Button>
          </Box>
        )}></FlatList>

      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
