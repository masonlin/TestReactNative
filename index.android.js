/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Slider
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Hi, I{'\''}m Maosn Lin.
        </Text>
        <Text style={styles.instructions}>
          Forget the Cordova and embrace the React Native! :)
        </Text>
        <View style={styles.imagesView}>
        <Image
          style={styles.images}
          source={{uri: 'http://moduscreate.com/wp-content/uploads/2015/07/ReactNativelogo.png'}}
        />
        <Image
          style={styles.images}
          source={{uri: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p160x160/11822320_883506785056925_5775753874913412757_n.jpg?oh=ccd34be17b17614f9d4542464ade81da&oe=5829B775'}}
        />
        <Text style={styles.instructions}>--------------------</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  images: {
    width: 100,
    height: 100
  },
  imagesView: {
    opacity: 0.5
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
