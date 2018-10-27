import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './src/Navigator';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Provider store={store}>
          <Navigator />
        </Provider>
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
