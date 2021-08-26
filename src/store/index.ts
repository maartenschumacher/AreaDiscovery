import {configureStore} from '@reduxjs/toolkit';
import {favouriteLandmarksReducer} from './favouriteLandmark';
import {RootState, Action} from '../types/store';

export const store = configureStore<RootState, Action>({
  reducer: {
    favouriteLandmarks: favouriteLandmarksReducer,
  },
});
