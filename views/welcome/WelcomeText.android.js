/** @format */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class WelcomeText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="BTN"></Button>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          This app shows the basics of navigating between a few screens, working
          with ListView and handling text input.
        </Text>
        <Text style={styles.instructions}>
          Modify any files to get started. For example try changing the file
          views/welcome/WelcomeText.android.js.
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 16,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 12,
  },
});
