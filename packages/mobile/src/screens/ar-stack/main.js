import React from 'react';
import {ViroARSceneNavigator} from 'react-viro';

import {SafeView} from '../../components/safe-area-view';
import {HelloWorldSceneAR} from './HelloWorldSceneAR';

function MainARPage() {
  return (
    <SafeView>
      <ViroARSceneNavigator
        navigatorType="AR"
        initialScene={{scene: HelloWorldSceneAR}}
      />
    </SafeView>
  );
}

export {MainARPage};
