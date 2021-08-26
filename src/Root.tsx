import React from 'react';
import {AreaDiscovery} from './components/AreaDiscovery';
import {Provider} from 'react-redux';
import {store} from './store';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types/navigation';
import {LandmarkDetail} from './components/LandmarkDetail';

const Stack = createStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AreaDiscovery" component={AreaDiscovery} />
          <Stack.Screen name="LandmarkDetail" component={LandmarkDetail} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
