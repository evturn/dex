import React, { Component } from 'react';
import { AsyncStorage, Keyboard, ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import PopUp from '../../components/PopUp';
import Touchable from '../../components/Touchable';
import { createItem } from './actions';

class CreateScreen extends Component {
  static navigationOptions = {
    title: 'Create',
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

  };

  static defaultProps = {
    items: [],
  }

  state = {
    title: '',
    content: '',
  }

  componentDidUpdate(prevProps) {
    if (this.props.items.length > prevProps.items.length) {
      this.onCreated();
    }
  }
  
  onCreated = async () => {
    const { items } = this.props;
    const count = items.length;
    const item = items[count - 1];
    await AsyncStorage.setItem(item.id, JSON.stringify(item));
    this.setState({
      title: '',
      content: ''
    }, Keyboard.dismiss);
    const saved = await AsyncStorage.getItem(item.id);
  }

  onChangeText = name => text => {
    this.setState({ [name]: text });
  }

  createArticle = e => {
    const { title, content } = this.state;
    if (title.trim() !== '' && content.trim() !== '') {
      this.props.createItem(this.state);
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <ScrollView style={styles.scroll}>
          <View style={styles.inputContainer}>
            <Input 
              autoCapitalize="none"
              placeholder="Title"
              onChangeText={this.onChangeText('title')}
              value={this.state.title} />
          </View>
          <View style={styles.inputContainer}>
            <Input 
              multiline={true}
              numberOfLines={4}
              placeholder="Additional comments"
              style={styles.multi}
              onChangeText={this.onChangeText('content')}
              value={this.state.content} />
          </View>
          <Touchable
            onPress={this.createArticle}
            style={styles.btn}
            text="Submit" />
        </ScrollView>
        <PopUp count={this.props.items.length} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#002b36',
  },
  scroll: {
    paddingTop: 15,
  },
  inputContainer: {
    marginVertical: 10,
  },
  multi: {
    height: 100,
  },
  btn: {
    marginVertical: 10,
    marginHorizontal: 20,
    alignSelf: 'flex-end',
  },
});

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps, { createItem })(CreateScreen);
