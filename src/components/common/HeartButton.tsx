import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLandmarkFavourited,
  toggleFavouriteLandmarkAction,
} from '../../store/favouriteLandmark';
import {RootState} from '../../types/store';

type Props = {
  landmarkID: number;
  size: number;
};

export const HeartButton: React.FC<Props> = ({landmarkID, size}) => {
  const dispatch = useDispatch();

  const isFavourited = useSelector<RootState>(state =>
    getLandmarkFavourited(state, landmarkID),
  );

  const onPress = React.useCallback(
    () => dispatch(toggleFavouriteLandmarkAction(landmarkID)),
    [landmarkID, dispatch],
  );

  return (
    <View
      style={[
        styles.container,
        {width: size, height: size, borderRadius: size / 2},
      ]}>
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
        <Icon
          name={isFavourited ? 'heart' : 'heart-o'}
          size={size - 15}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
