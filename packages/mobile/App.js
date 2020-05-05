import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.rootView} />
    </>
  );
}

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default App;
