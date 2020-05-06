import React from 'react';
import {Text} from 'react-native';

import {SafeView} from '../../components/safe-area-view';

function AuthorizationPage() {
  return (
    <SafeView>
      <Text style={{color: 'white'}}>Authorization</Text>
    </SafeView>
  );
}

export {AuthorizationPage};
