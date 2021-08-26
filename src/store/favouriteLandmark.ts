import {FavouriteLandmarkState, Action, RootState} from '../types/store';

export const favouriteLandmarksReducer = (
  state: FavouriteLandmarkState = {},
  action: Action,
): FavouriteLandmarkState => {
  switch (action.type) {
    case 'toggleFavouriteLandmark':
      return {...state, [action.id]: !state[action.id]};
    default:
      return state;
  }
};

export const getLandmarkFavourited = (
  state: RootState,
  id: number,
): boolean | undefined => state.favouriteLandmarks[id];

export const toggleFavouriteLandmarkAction = (id: number): Action => ({
  type: 'toggleFavouriteLandmark',
  id,
});
