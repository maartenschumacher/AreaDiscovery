import {HeartButton} from '../common/HeartButton';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Landmark} from '../../types/Landmark';

type Props = {
  landmark: Landmark;
};

export const LandmarkCard: React.FC<Props> = ({landmark}) => {
  return (
    <View style={styles.container} testID="card">
      <Image source={{uri: landmark.image}} style={styles.image} />
      <Text style={styles.title}>{landmark.name}</Text>
      <View style={styles.heartContainer}>
        <HeartButton size={30} landmarkID={landmark.id} />
      </View>
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
    justifyContent: 'flex-end',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  heartContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
