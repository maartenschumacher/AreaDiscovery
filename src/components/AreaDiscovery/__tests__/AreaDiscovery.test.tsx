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

    fireEvent.press(getAllByTestId('AreaDiscovery_heart-button')?.[0]);

    expect(queryAllByTestId('marker-heart').length).toBe(1);
  });

  it('navigates to a detail view', () => {
    const {getAllByTestId, getByText} = render(<Root />);
    fireEvent.press(getAllByTestId('card')?.[0]);
    expect(
      getByText(
        'Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster; the name is frequently extended to also refer to the clock and the clock tower. The official name of the tower in which Big Ben is located was originally the Clock Tower; it was renamed Elizabeth Tower in 2012 to mark the Diamond Jubilee of Elizabeth II, Queen of the United Kingdom.',
      ),
    ).toBeTruthy();
  });
});
