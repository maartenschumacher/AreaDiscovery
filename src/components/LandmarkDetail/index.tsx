import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../types/navigation';
import {HeartButton} from '../common/HeartButton';
import {BackButton, SIZE as BACK_BUTTON_SIZE} from './BackButton';
import {SharedElement} from 'react-navigation-shared-element';

type Props = StackScreenProps<RootStackParamList, 'LandmarkDetail'>;

export const LandmarkDetail: React.FC<Props> = ({route}) => {
  const {landmark} = route.params;

  return (
    <View style={styles.container}>
      <SharedElement id={`item.${landmark.id}.photo`}>
        <Image source={{uri: landmark.image}} style={styles.image} />
      </SharedElement>
      <View style={styles.heartButtonContainer}>
        <HeartButton
          landmarkID={landmark.id}
          size={44}
          testID="LandmarkDetail_heart-button"
        />
      </View>
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
    right: 30,
    top: IMAGE_HEIGHT - BACK_BUTTON_SIZE / 2,
  },
  heartButtonContainer: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
});
