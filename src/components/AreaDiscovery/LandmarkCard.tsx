import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Landmark} from 'types/Landmark';

type Props = {
  landmark: Landmark;
};

export const LandmarkCard: React.FC<Props> = ({landmark}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: landmark.image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    width: 260,
    height: 150,
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
