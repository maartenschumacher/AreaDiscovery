import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../types/navigation';
import {BackButton, SIZE as BACK_BUTTON_SIZE} from './BackButton';

type Props = StackScreenProps<RootStackParamList, 'LandmarkDetail'>;

export const LandmarkDetail: React.FC<Props> = ({route}) => {
  const {landmark} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: landmark.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{landmark.name}</Text>
        <Text style={styles.description}>{landmark.description}</Text>
      </View>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
    </View>
  );
};

const IMAGE_HEIGHT = 300;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
  },
  textContainer: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
  },
  backButtonContainer: {
    position: 'absolute',
    right: 20,
    top: IMAGE_HEIGHT - BACK_BUTTON_SIZE / 2,
  },
});
