import React, { Component } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Touchable from '../../components/Touchable';
import ItemsList from '../../components/ItemsList';
import { searchItems } from './actions';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
    headerBackTitleStyle: {
      color: '#eee8d5',
    },
    headerStyle: {
      backgroundColor: '#073642',
      borderBottomColor: '#073642',
    },
    headerTitleStyle: {
      color: '#eee8d5',
    },
  }

  searchItems = query => {
    this.props.searchItems(query.trim());
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.inputContainer}>
          <Input 
            autoCapitalize="none"
            onChangeText={this.searchItems} />
        </View>
        <View style={styles.results}>
          <ItemsList data={this.props.results} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#002b36',
  },
  results: {
    marginTop: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
});

function mapStateToProps(state) {
  return {
    results: state.results,
  };
}

export default connect(mapStateToProps, { searchItems })(SearchScreen);
