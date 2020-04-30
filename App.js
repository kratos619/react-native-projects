import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Image
} from 'react-native';
import ListItem from './src/ListItem/ListItem';

export default class App extends React.Component {
  state = {
    placeName: '',
    listItem: [],
    imageName: 'http://lorempixel.com/400/200/sports/'
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  deleteItem = (place, i) => {
    alert(place + ' ' + i);
    this.setState(this.state.listItem.splice(i, 1));
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
            // alert(place);
            this.deleteItem(place, i);
          }}
          image={this.state.imageName}
          placeName={place}
        />
      );
    });
    return (
      <View style={styles.container}>
        <Image style={styles.stretch} source={{ uri: this.state.imageName }} />
        <Text>{this.state.placeName}</Text>
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
        {listOutPut}
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
  stretch: {
    width: '100%',
    height: '50%'
  },
  placeinput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  placeImg: {
    marginRight: 8
  }
});
