import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Landmark} from '../../types/Landmark';
import {MapMarker} from './MapMarker';

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
      <MapMarker
        key={landmark.id}
        landmark={landmark}
        onPress={() => setSelectedLandmarkID(landmark.id)}
        isSelected={selectedLandmarkID === landmark.id}
      />
    ))}
  </MapView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
