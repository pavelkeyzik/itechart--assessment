import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainARPage} from './ar-stack/main';

const Stack = createStackNavigator();

function ARStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainAR" component={MainARPage} />
    </Stack.Navigator>
  );
}

export {ARStack};
