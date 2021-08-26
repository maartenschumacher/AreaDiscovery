import React from 'react';
import {Map} from './Map';

export const AreaDiscovery = () => {
  const [selectedLandmarkID, setSelectedLandmarkID] = React.useState<
    number | null
  >(null);
  return (
    <Map
      selectedLandmarkID={selectedLandmarkID}
      setSelectedLandmarkID={setSelectedLandmarkID}
    />
  );
};
