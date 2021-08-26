import React from 'react';
import {AreaDiscovery} from './components/AreaDiscovery';
import {Provider} from 'react-redux';
import {store} from './store';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AreaDiscovery" component={AreaDiscovery} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
