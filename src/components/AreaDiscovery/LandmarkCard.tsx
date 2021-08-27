import {HeartButton} from '../common/HeartButton';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Landmark} from '../../types/Landmark';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigation';
import {SharedElement} from 'react-navigation-shared-element';

type Props = {
  landmark: Landmark;
};

export const LandmarkCard: React.FC<Props> = ({landmark}) => {
  const {navigate} =
    useNavigation<StackNavigationProp<RootStackParamList, 'AreaDiscovery'>>();

  return (
    <TouchableOpacity
      style={styles.container}
      testID="card"
      onPress={() => navigate('LandmarkDetail', {landmark})}>
      <SharedElement id={`item.${landmark.id}.photo`}>
        <Image source={{uri: landmark.image}} style={styles.image} />
      </SharedElement>
      <Text style={styles.title}>{landmark.name}</Text>
      <View style={styles.heartContainer}>
        <HeartButton
          size={30}
          landmarkID={landmark.id}
          testID="AreaDiscovery_heart-button"
        />
      </View>
    </TouchableOpacity>
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
