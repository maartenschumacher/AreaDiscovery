import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Landmark} from '../../types/Landmark';

type Props = {
  landmark: Landmark;
  isSelected: boolean;
  onPress: () => void;
};

export const MapMarker: React.FC<Props> = ({landmark, isSelected, onPress}) => (
  <Marker key={landmark.id} coordinate={landmark.latlng}>
    <TouchableOpacity onPress={onPress}>
      <Icon
        name="map-marker"
        size={44}
        color={isSelected ? 'blue' : 'grey'}
        testID="marker"
      />
    </TouchableOpacity>
  </Marker>
);
