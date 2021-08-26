import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Landmark} from 'types/Landmark';
import {LandmarkCard} from './LandmarkCard';

type Props = {
  landmarks: Landmark[];
};

export const List: React.FC<Props> = ({landmarks}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={landmarks}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => <LandmarkCard landmark={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
