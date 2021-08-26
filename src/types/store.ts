export type FavouriteLandmarkState = {[id: number]: boolean};

export type RootState = {
  favouriteLandmarks: FavouriteLandmarkState;
};

export type Action = {type: 'toggleFavouriteLandmark'; id: number};
