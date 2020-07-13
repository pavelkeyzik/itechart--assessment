import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ViroARScene, ViroText, ViroConstants} from 'react-viro';

function HelloWorldSceneAR() {
  const [text, setText] = useState('Initializing AR...');

  function _onInitialized(state) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={_onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontSize: 30,
    color: '#ff0000',
  },
});

export {HelloWorldSceneAR};
