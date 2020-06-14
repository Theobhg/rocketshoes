import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#7159c1' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: 'Cart' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
