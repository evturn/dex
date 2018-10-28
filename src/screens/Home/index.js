import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Touchable from '../../components/Touchable';
import { fetchItems } from './actions';

class Home extends Component {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    AsyncStorage.getAllKeys((e, keys) => {
      AsyncStorage.multiGet(keys, (e, stores) => {
        this.props.fetchItems(stores.map((x, i, store) => JSON.parse(store[i][1])));
      });
    });
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

export default connect(state => ({items: state.items}), { fetchItems })(Home);
