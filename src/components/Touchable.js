import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Touchable = ({ style={}, text='', ...props }) => {
  return (
    <View style={[styles.root, style]}>
      <TouchableOpacity
        {...props}
        style={styles.btn}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '40%',
  },
  btn: {
    borderRadius: 4,
    paddingVertical: 15,
    backgroundColor: '#1A343C',
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
});

export default Touchable;
