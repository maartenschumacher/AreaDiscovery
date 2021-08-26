import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Root} from '../../../Root';

describe('AreaDiscovery', () => {
  it('shows all markers', () => {
    const {queryAllByTestId} = render(<Root />);
    expect(queryAllByTestId('marker').length).toBe(5);
  });

  it('shows all cards', () => {
    const {queryAllByTestId} = render(<Root />);
    expect(queryAllByTestId('card').length).toBe(5);
  });

  it('shows the heart at the marker when list item is hearted', () => {
    const {queryAllByTestId, getAllByTestId} = render(<Root />);
    expect(queryAllByTestId('marker-heart').length).toBe(0);

    fireEvent.press(getAllByTestId('heart-button')?.[0]);

    expect(queryAllByTestId('marker-heart').length).toBe(1);
  });
});
