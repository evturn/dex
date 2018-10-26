import React, { Component } from 'react';
import {  FlatList, StyleSheet, Text, View } from 'react-native';

const ItemsList = props => {
  return (
    <FlatList
      {...props}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      renderItem={ListItem}
      style={styles.root} />
  );
};

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={[styles.text, styles.content]}>{item.content}</Text>
    </View>
  );
};

const ItemSeparator = props => {
  return (
    <View style={styles.separator} />
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#0F2931',
    borderRadius: 2,
  },
  text: {
    color: '#eee8d5',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
  },
  content: {
    fontSize: 13,
    color: '#657b83',
  },
  separator: {
    height: 1,
    backgroundColor: '#073642',
  },
});

export default ItemsList;
