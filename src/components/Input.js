import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ style={}, ...props }) => {
  return (
    <TextInput
      placeholderTextColor="#657B83"
      {...props}
      style={[styles.root, style]} />
  );
};

const styles = StyleSheet.create({
  root: {
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    color: '#eee8d5',
    borderRadius: 2,
    backgroundColor: '#00212B',
  },
});

export default Input;
