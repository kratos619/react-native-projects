import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ListItem(props) {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={style.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: 'blue',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
