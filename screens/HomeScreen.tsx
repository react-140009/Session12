import React, {useEffect} from 'react';
import {ScrollView, Text, View, Button, StyleSheet} from 'react-native';
import {MenuItem} from '../components/MenuItem';
import Realm from 'realm';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};

export const HomeScreen = ({navigation}: any) => {
  useEffect(() => {
    (async () => {
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [TaskSchema],
      });

      let task1, task2;
      const tasks = realm.objects('Task');

      console.log(
        `The lists of open tasks are: ${tasks.map(openTask => openTask.name)}`,
      );

      // realm.write(() => {
      //   task1 = realm.create('Task', {
      //     _id: 1,
      //     name: 'go grocery shopping',
      //     status: 'Open',
      //   });

      //   task2 = realm.create('Task', {
      //     _id: 2,
      //     name: 'go exercise',
      //     status: 'Open',
      //   });

      //   console.log(`created two tasks: ${task1.name} & ${task2.name}`);
      // });
    })();
  });
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>HOME1</Text>
        <View style={styles.menuContainer}>
          <MenuItem
            img={require('../assets/images/pill8.png')}
            title="دارو"
            onPress={() => navigation.push('DrugCategory')}></MenuItem>
          <MenuItem
            img={require('../assets/images/pharmacy.png')}
            title="داروخانه"
            onPress={() => navigation.push('Drugstore')}></MenuItem>
          <MenuItem
            img={require('../assets/images/hospital5.png')}
            title="بیمارستان"
            onPress={() => navigation.push('Hospital')}></MenuItem>
          <MenuItem
            img={require('../assets/images/lab.png')}
            title="آزمایشگاه"
            onPress={() => navigation.push('Lab')}></MenuItem>
          <MenuItem
            img={require('../assets/images/Register.png')}
            title="ثبت نام"
            onPress={() => navigation.push('Register')}></MenuItem>
          <MenuItem
            img={require('../assets/images/buy.png')}
            title="خرید اشتراک"
            onPress={() => navigation.push('Purchase')}></MenuItem>
          <MenuItem
            img={require('../assets/images/help.png')}
            title="راهنما"
            onPress={() => navigation.push('Help')}></MenuItem>
          <MenuItem
            img={require('../assets/images/about.png')}
            title="درباره ما"
            onPress={() => navigation.push('AboutUs')}></MenuItem>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
