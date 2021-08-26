import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigation';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BackButton = () => {
  const {goBack} =
    useNavigation<StackNavigationProp<RootStackParamList, 'LandmarkDetail'>>();

  return (
    <TouchableOpacity onPress={() => goBack()}>
      <View style={styles.container}>
        <Icon name="chevron-down" size={SIZE - 15} color="blue" />
      </View>
    </TouchableOpacity>
  );
};

export const SIZE = 44;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
});
