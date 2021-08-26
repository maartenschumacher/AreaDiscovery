import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import landmarks from './londonLandmarks.json';

const LONDON_REGION = {
  latitude: 51.48383025891238,
  latitudeDelta: 0.13870234913213864,
  longitude: -0.10401417580052907,
  longitudeDelta: 0.11384664007641732,
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
