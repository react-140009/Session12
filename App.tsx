/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {AboutUsScreen} from './screens/AboutUscreen';
import {DrugstoreScreen} from './screens/DrugstoreScreen';
import {HelpScreen} from './screens/HelpScreen';
import {HospitalScreen} from './screens/HospitalScreen';
import {PurchaseScreen} from './screens/PurchaseScreen';
import {RegisterScreen} from './screens/RegisterScreen';
import {LabScreen} from './screens/LabScreen';
import {DrugsScreen} from './screens/DrugsScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="خانه" component={HomeScreen} />
        <Stack.Screen
          name="AboutUs"
          component={AboutUsScreen}
          options={{title: 'درباره ما'}}
        />
        <Stack.Screen
          name="Drugs"
          component={DrugsScreen}
          options={{title: 'لیست دارو ها'}}
        />
        <Stack.Screen
          name="Drugstore"
          component={DrugstoreScreen}
          options={{title: 'لیست دارو خانه ها'}}
        />
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{title: 'راهنما'}}
        />
        <Stack.Screen
          name="Hospital"
          component={HospitalScreen}
          options={{title: 'لیست بیمارستان ها'}}
        />
        <Stack.Screen
          name="Purchase"
          component={PurchaseScreen}
          options={{title: 'خرید اشتراک'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'ثبت نام'}}
        />
        <Stack.Screen
          name="Lab"
          component={LabScreen}
          options={{title: 'آزمایشگاه'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
