import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

class PopUp extends Component {
  state = {
    visible: false,
  }

  height = new Animated.Value(0)

  componentDidUpdate(prevProps) {
    if (this.props.count > prevProps.count) {
      this.animateIn();
    }
  }

  animateIn = () => {
    this.setState({ visible: true });
    Animated.timing(this.height, {
      toValue: 75,
      duration: 200,
      delay: 100,
      easing: Easing.ease,
    })
    .start(() => this.animateOut());
  }

  animateOut = () => {
    Animated.timing(this.height, {
      toValue: 0,
      duration: 200,
      delay: 1800,
      easing: Easing.ease,
    })
    .start(() => this.setState({ visible: false }));
  }

  render() {
    return this.state.visible
      ? <View style={styles.root}>
          <Animated.View style={[styles.notification, { height: this.height }]}>
            <Text style={styles.message}>Saved ✓</Text>
          </Animated.View>
        </View>
      : null;
  }
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 24, 
    color: '#fdf6e3',
  },
  notification: {
    backgroundColor: '#073642',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    overflow: 'hidden',
  },
  message: {
    color: '#eee8d5',
    fontSize: 20,
  },
});

export default PopUp;
