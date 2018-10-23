import React, { Component } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Touchable from '../../components/Touchable';
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

  static defaultProps = {
    results: [],
  }

  searchItems = query => {
    if (query.trim() !== '') {
      this.props.searchItems(query);
    }
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.inputContainer}>
          <Input 
            autoCapitalize="none"
            onChangeText={this.searchItems} />
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
  item: {
    margin: 20,
    borderRadius: 4,
    paddingVertical: 15,
    backgroundColor: '#1A343C',
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'left',
  },
});

function mapStateToProps(state) {
  return {
    results: state.results,
  };
}

export default connect(mapStateToProps, { searchItems })(SearchScreen);
