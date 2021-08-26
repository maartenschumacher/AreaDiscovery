import React from 'react';
import {render} from '@testing-library/react-native';
import {AreaDiscovery} from '../';

describe('AreaDiscovery', () => {
  it('shows all markers', () => {
    const {queryAllByTestId} = render(<AreaDiscovery />);
    expect(queryAllByTestId('marker').length).toBe(5);
  });
});
