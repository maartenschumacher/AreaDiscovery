import React from 'react';
import MapView from 'react-native-maps';

const LONDON_REGION = {
  latitude: 51.475772098209575,
  latitudeDelta: 0.3580543927585893,
  longitude: -0.0887239031507363,
  longitudeDelta: 0.2938382496812153,
};

export const Map = () => (
  <MapView
    style={{width: '100%', height: '100%'}}
    initialRegion={LONDON_REGION}
  />
);
