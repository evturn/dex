import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ style={}, ...props }) => {
  return (
    <TextInput
      {...props}
      style={[styles.root, style]} />
  );
};

const styles = StyleSheet.create({
  root: {
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderColor: '#c3c3c3',
    borderRadius: 2,
    borderWidth: 1,
  },
});

export default Input;
