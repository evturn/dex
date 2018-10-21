import React, { Component } from 'react';
import { Keyboard, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Input from '../../components/Input';
import Touchable from '../../components/Touchable';

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

  state = {
    query: '',
  }

  componentDidUpdate(prevProps) {
    if (this.props.results !== prevProps.results) {
      Keyboard.dismiss();
    }
  }

  onChangeText = name => text => {
    this.setState({ [name]: text.trim() });
  }

  searchItems = () => {
    console.log(this.state.query);
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.inputContainer}>
          <Input 
            autoCapitalize="none"
            onChangeText={this.onChangeText('query')}
            value={this.state.query} />
        </View>
        <Touchable
          onPress={this.searchItems}
          style={styles.btn}
          text="Submit" />
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
  btn: {
    margin: 20,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    marginVertical: 10,
  },
});

export default SearchScreen;

