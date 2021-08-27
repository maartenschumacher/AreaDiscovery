import React from 'react';
import {Animated} from 'react-native';

export const useHeartAnimation = (isFavourited: boolean | undefined) => {
  const scaleAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isFavourited) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        speed: 16,
        bounciness: 16,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }, [isFavourited, scaleAnim]);

  return scaleAnim;
};
