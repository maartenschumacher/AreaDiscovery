import React from 'react';
import {AreaDiscovery} from './components/AreaDiscovery';
import {Provider} from 'react-redux';
import {store} from './store';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types/navigation';
import {LandmarkDetail} from './components/LandmarkDetail';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {opacity: progress},
            }),
          }}>
          <Stack.Screen name="AreaDiscovery" component={AreaDiscovery} />
          <Stack.Screen
            name="LandmarkDetail"
            component={LandmarkDetail}
            sharedElements={route => {
              const {landmark} = route.params;
              return [`item.${landmark.id}.photo`];
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
