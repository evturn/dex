import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Touchable from '../../components/Touchable';

class Home extends Component {
  static navigationOptions = {
    header: null,
  }

  navigate = screen => () => {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.root}>
        <Touchable
          onPress={this.navigate('Create')}
          style={styles.btn}
          text="Create" />
        <Touchable
          onPress={this.navigate('Search')}
          style={styles.btn}
          text="Search" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002b36',
  },
  btn: {
    marginVertical: 20,
  },
});

export default Home;