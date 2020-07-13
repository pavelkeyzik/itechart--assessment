import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStack} from './screens/auth-stack';
import {ARStack} from './screens/ar-stack';

const ApplicationStack = createStackNavigator();

function Application() {
  return (
    <NavigationContainer>
      <ApplicationStack.Navigator headerMode="none">
        <ApplicationStack.Screen name="ARStack" component={ARStack} />
        <ApplicationStack.Screen name="AuthStack" component={AuthStack} />
      </ApplicationStack.Navigator>
    </NavigationContainer>
  );
}

export {Application};
