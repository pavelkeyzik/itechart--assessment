import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthorizationPage} from './auth-stack/authorization';
import {RegistrationPage} from './auth-stack/registration';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Authorization" component={AuthorizationPage} />
      <Stack.Screen name="Registration" component={RegistrationPage} />
    </Stack.Navigator>
  );
}

export {AuthStack};
