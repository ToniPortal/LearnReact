import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [pos, setPos] = useState('');

  useEffect(() => {
    const getLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setPos(location);
      } else {
        console.log('Location permission denied');
      }
    };

    getLocationPermission();
  }, []);

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(pos)}</Text>

      <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.85679108910881,
            longitude: 2.392559360270229,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 48.85679108910881,
              longitude: 2.392559360270229,
            }}
            title={'Ma position'}
            description={'Je suis ici !'}
          />

    </SafeAreaView>
  );
}
