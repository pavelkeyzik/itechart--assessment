import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

function SafeView({children}) {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.root}>{children}</SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export {SafeView};
