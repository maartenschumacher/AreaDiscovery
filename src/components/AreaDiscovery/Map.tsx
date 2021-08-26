import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Landmark} from 'types/Landmark';

const LONDON_REGION = {
  latitude: 51.48383025891238,
  latitudeDelta: 0.13870234913213864,
  longitude: -0.10401417580052907,
  longitudeDelta: 0.11384664007641732,
};

type Props = {
  landmarks: Landmark[];
  selectedLandmarkID: number | null;
  setSelectedLandmarkID: (id: number) => void;
};

export const Map: React.FC<Props> = ({
  landmarks,
  selectedLandmarkID,
  setSelectedLandmarkID,
}) => (
  <MapView style={styles.container} initialRegion={LONDON_REGION}>
    {landmarks.map(landmark => (
      <Marker key={landmark.id} coordinate={landmark.latlng}>
        <TouchableOpacity onPress={() => setSelectedLandmarkID(landmark.id)}>
          <Icon
            name="map-marker"
            size={44}
            color={selectedLandmarkID === landmark.id ? 'blue' : 'grey'}
            testID="marker"
          />
        </TouchableOpacity>
      </Marker>
    ))}
  </MapView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
