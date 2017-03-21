import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Show from './components/showThumb'

class App extends React.Component {
  render() {
    return (
      <Show style={{backgroundColor: 'black'}}/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
// });

Expo.registerRootComponent(App);
