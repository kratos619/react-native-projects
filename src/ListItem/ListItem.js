import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListItem(props) {
  return (
    <View style={style.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: 'red'
  }
});
