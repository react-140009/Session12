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
  AppState,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DrugCategoryScreen,
  LabScreen,
  RegisterScreen,
  PurchaseScreen,
  HospitalScreen,
  HelpScreen,
  DrugstoreScreen,
  AboutUsScreen,
  HomeScreen,
  DrugsScreen,
  DrugDetailScreen,
} from './screens';

import {NativeBaseProvider, Box} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import {useToast} from 'native-base';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const toast = useToast();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    SplashScreen.hide();

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        console.log('App has come to the foreground! 👏');
      } else {
        console.log('App has come to the background 😢');
      }
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if (!state.isConnected) {
        toast.show({
          description: 'اشکال در شبکه',
        });
      }
    });
    /**
     *  async
     *  pooling ❌
     *  push ✔
     */
  });

  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="خانه" component={HomeScreen} />
          <Stack.Screen
            name="AboutUs"
            component={AboutUsScreen}
            options={{title: 'درباره ما'}}
          />
          <Stack.Screen
            name="DrugCategory"
            component={DrugCategoryScreen}
            options={{title: 'دسته بندی دارو ها'}}
          />
          <Stack.Screen
            name="DrugDetail"
            component={DrugDetailScreen}
            options={{title: 'DrugDetailScreen'}}
          />
          <Stack.Screen
            name="Drugs"
            component={DrugsScreen}
            options={{title: 'دسته بندی دارو ها'}}
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
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
