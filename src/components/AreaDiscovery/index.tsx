import React from 'react';
import {Map} from './Map';
import landmarks from './londonLandmarks.json';
import {StyleSheet, View} from 'react-native';
import {List} from './List';

export const AreaDiscovery = () => {
  const [selectedLandmarkID, setSelectedLandmarkID] = React.useState<
    number | null
  >(null);
  return (
    <View style={styles.container}>
      <Map
        landmarks={landmarks}
        selectedLandmarkID={selectedLandmarkID}
        setSelectedLandmarkID={setSelectedLandmarkID}
      />
      <List landmarks={landmarks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
