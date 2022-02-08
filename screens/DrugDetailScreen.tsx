import {Box, Button, Divider, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, RefreshControl} from 'react-native';
import api from '../api';
import {DrugModel} from './DrugModel';

export const DrugDetailScreen = ({navigation, route}: any) => {
  const drug: DrugModel = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: drug.name,
    });
  }, []);

  return (
    <View>
      <Text>لیست داروها</Text>
      <Box px={2} py={1}>
        <VStack space={4} divider={<Divider />}>
          <Box
            borderColor="coolGray.200"
            borderWidth="1"
            px={2}
            py={1}
            backgroundColor="gray.700">
            {drug.name}
          </Box>
        </VStack>
      </Box>
      <Box border={1}>
        <VStack space={4} divider={<Divider />}>
          <Box>{drug.ashkal}</Box>
        </VStack>
      </Box>
      <Button onPress={() => navigation.pop()}>بازگشت</Button>
    </View>
  );
};
