import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/Navigator';

class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
