import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import landmarks from './londonLandmarks.json';

const LONDON_REGION = {
  latitude: 51.475772098209575,
  latitudeDelta: 0.3580543927585893,
  longitude: -0.0887239031507363,
  longitudeDelta: 0.2938382496812153,
};

export const Map = () => (
  <MapView
    style={{width: '100%', height: '100%'}}
    initialRegion={LONDON_REGION}>
    {landmarks.map(landmark => (
      <Marker key={landmark.id} coordinate={landmark.latlng}>
        <Icon name="map-marker" size={44} color="grey" />
      </Marker>
    ))}
  </MapView>
);
