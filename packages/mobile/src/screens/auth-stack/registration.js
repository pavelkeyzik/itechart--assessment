import React from 'react';
import {Text} from 'react-native';

import {SafeView} from '../../components/safe-area-view';

function RegistrationPage() {
  return (
    <SafeView>
      <Text style={{color: 'white'}}>Registration</Text>
    </SafeView>
  );
}

export {RegistrationPage};
