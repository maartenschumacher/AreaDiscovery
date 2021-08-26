import React from 'react';
import {Map} from './Map';
import landmarks from './londonLandmarks.json';

export const AreaDiscovery = () => {
  const [selectedLandmarkID, setSelectedLandmarkID] = React.useState<
    number | null
  >(null);
  return (
    <Map
      landmarks={landmarks}
      selectedLandmarkID={selectedLandmarkID}
      setSelectedLandmarkID={setSelectedLandmarkID}
    />
  );
};
