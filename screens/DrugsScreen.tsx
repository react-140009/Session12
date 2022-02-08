import {Box, Button, Spinner} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, RefreshControl} from 'react-native';
import api from '../api';
import {DrugModel} from './DrugModel';

export const DrugsScreen = ({navigation, route}: any) => {
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DrugModel[]>([]);
  useEffect(() => {
    navigation.setOptions({
      title: 'داروهای دسته ' + route.params.persianName,
    });
  }, []);

  useEffect(() => {
    loadData(page);
  }, [page]);

  const loadData = async (page: number) => {
    console.log('loading page', page);

    setLoading(true);
    let response = await api.get<DrugModel[]>(
      `drugs?categoryId=${route.params.id}&_limit=20&_page=${page}`,
    );
    if (page === 1) {
      setData(response.data);
    } else {
      setData([...data, ...response.data]);
    }
    setLoading(false);
    console.log('page', page, 'loaded');
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const refresh = () => {
    setPage(1);
  };

  return (
    <View>
      <Text>لیست داروها</Text>
      {loading && <Spinner />}
      <FlatList
        data={data}
        onEndReached={nextPage}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}></RefreshControl>
        }
        keyExtractor={item => item.id + item.name}
        renderItem={item => (
          <Box px={5} py={2}>
            <Button
              onPress={() => navigation.navigate('DrugDetail', item.item)}>
              {item.item.name}
            </Button>
          </Box>
        )}></FlatList>
      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
