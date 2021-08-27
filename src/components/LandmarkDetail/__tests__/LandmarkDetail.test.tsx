import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Root} from '../../../Root';

describe('LandmarkDetail', () => {
  it('adds the heart on the map marker when hearted in the detail view', () => {
    const {getAllByTestId, queryAllByTestId} = render(<Root />);
    expect(queryAllByTestId('marker-heart').length).toBe(0);

    fireEvent.press(getAllByTestId('card')?.[0]);
    fireEvent.press(getAllByTestId('LandmarkDetail_heart-button')?.[0]);
    fireEvent.press(getAllByTestId('back-button')?.[0]);

    expect(queryAllByTestId('marker-heart').length).toBe(1);
  });
});
