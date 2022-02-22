import React, {useEffect} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {UrlTile, Marker, Circle} from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '80%',
  },
});
export const AboutUsScreen = ({navigation}: any) => {
  useEffect(() => {
    // Geolocation.watchPosition(
    //   info => console.log(info),
    //   err => console.log('-->', err),
    // );
  });
  const getLocation = () => {
    Geolocation.getCurrentPosition(info => console.log(info));
  };
  return (
    <View>
      <Text>About !</Text>
      <MapView
        style={styles.map}
        provider={null}
        initialRegion={{
          latitude: 35.7154139,
          longitude: 51.3977737,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <UrlTile
          zIndex={99}
          maximumZ={19}
          urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          coordinate={{latitude: 35.7154139, longitude: 51.3977737}}
          title={'My'}
        />
        <Circle
          center={{latitude: 35.7154139, longitude: 51.3977737}}
          radius={1000}></Circle>
      </MapView>

      <Button title="get location" onPress={getLocation}></Button>

      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
