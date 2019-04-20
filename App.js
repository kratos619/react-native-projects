import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/ListItem/ListItem';

export default class App extends React.Component {
  state = {
    placeName: '',
    listItem: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  addToList = () => {
    this.state.listItem.push(this.state.placeName);
    this.setState({
      placeName: ''
    });
  };
  render() {
    const listOutPut = this.state.listItem.map((place, i) => {
      return (
        <ListItem
          key={i}
          onItemPressed={() => {
            alert(place);
          }}
          placeName={place}
        />
      );
    });
    return (
      <View style={styles.container}>
        <Text>{this.state.placeName}</Text>
        {listOutPut}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="enter Your Name"
            onChangeText={this.placeNameChangeHandler}
            value={this.state.placeName}
          />
          <Button
            style={styles.placeButton}
            onPress={this.addToList}
            title="add"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeinput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
