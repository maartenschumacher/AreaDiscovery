import React from 'react';
import {AreaDiscovery} from './components/AreaDiscovery';
import {Provider} from 'react-redux';
import {store} from './store';

export const Root = () => {
  return (
    <Provider store={store}>
      <AreaDiscovery />
    </Provider>
  );
};
