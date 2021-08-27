import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {getLandmarkFavourited} from '../../store/favouriteLandmark';
import {Landmark} from '../../types/Landmark';
import {RootState} from '../../types/store';

type Props = {
  landmark: Landmark;
  isSelected: boolean;
  onPress: () => void;
};

export const MapMarker: React.FC<Props> = ({landmark, isSelected, onPress}) => {
  const isFavourite = useSelector<RootState>(state =>
    getLandmarkFavourited(state, landmark.id),
  );

  return (
    <Marker key={landmark.id} coordinate={landmark.latlng} onPress={onPress}>
      <Icon
        name="map-marker"
        size={44}
        color={isSelected ? 'blue' : 'grey'}
        testID="marker"
      />
      {isFavourite ? (
        <View style={styles.heart} testID="marker-heart">
          <Icon name="heart" size={15} color="red" />
        </View>
      ) : null}
    </Marker>
  );
};

const styles = StyleSheet.create({
  heart: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
