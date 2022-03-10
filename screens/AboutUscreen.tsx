import React, {useEffect, useState, useRef} from 'react';
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
  const [location, setLocation] = useState<any>();
  const mapRef = useRef<any>();
  useEffect(() => {
    // Geolocation.watchPosition(
    //   info => console.log(info),
    //   err => console.log('-->', err),
    // );

    Geolocation.getCurrentPosition(info => {
      setLocation(info.coords);
      mapRef.current.animateToRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    });
  });
  const getLocation = () => {
    Geolocation.getCurrentPosition(info => console.log(info));
  };
  return (
    <View>
      <Text>About !</Text>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={null}
        initialRegion={{
          latitude: 34.7154139,
          longitude: 51.3977737,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <UrlTile
          zIndex={99}
          maximumZ={19}
          urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location && <Marker coordinate={location} title={'My'} />}
        <Circle
          center={{latitude: 35.7154139, longitude: 51.3977737}}
          radius={1000}></Circle>
      </MapView>

      <Button title="get location" onPress={getLocation}></Button>

      <Button title="بازگشت" onPress={() => navigation.pop()}></Button>
    </View>
  );
};
