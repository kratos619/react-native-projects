import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Gaurav Milind Palaspagar new</Text>
        <TextInput
          style={{ width: 300, borderColor: 'black', borderWidth: 1 }}
          onChangeText={this.placeNameChangeHandler}
          value={this.state.placeName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
