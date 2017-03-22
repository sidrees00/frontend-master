import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './views/homePage';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomePage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
});

Expo.registerRootComponent(App);
