import {Landmark} from './Landmark';

export type RootStackParamList = {
  AreaDiscovery: undefined;
  LandmarkDetail: {
    landmark: Landmark;
  };
};
