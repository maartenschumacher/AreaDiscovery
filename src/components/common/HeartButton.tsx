import React from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLandmarkFavourited,
  toggleFavouriteLandmarkAction,
} from '../../store/favouriteLandmark';
import {RootState} from '../../types/store';
import {useHeartAnimation} from './useHeartAnimation';

type Props = {
  landmarkID: number;
  size: number;
  testID: string;
};

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const HeartButton: React.FC<Props> = ({landmarkID, size, testID}) => {
  const dispatch = useDispatch();

  const isFavourited = useSelector<RootState, boolean | undefined>(state =>
    getLandmarkFavourited(state, landmarkID),
  );

  const onPress = React.useCallback(
    () => dispatch(toggleFavouriteLandmarkAction(landmarkID)),
    [landmarkID, dispatch],
  );

  const scaleAnim = useHeartAnimation(isFavourited);

  const iconSize = size / 2;

  return (
    <View
      style={[
        styles.container,
        {width: size, height: size, borderRadius: size / 2},
      ]}>
      <TouchableOpacity
        testID={testID}
        onPress={onPress}
        hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
        <View style={{height: iconSize, width: iconSize}}>
          <AnimatedIcon
            name="heart"
            size={iconSize}
            color="red"
            style={[styles.icon, {transform: [{scale: scaleAnim}]}]}
          />
          <Icon
            style={styles.icon}
            name="heart-o"
            size={iconSize}
            color="red"
          />
        </View>
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
  icon: {
    position: 'absolute',
  },
});
