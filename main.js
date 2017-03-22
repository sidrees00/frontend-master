import Expo from 'expo';
import React from 'react';
import {View} from 'react-native';

import HomePage from './views/homePage';
import Styles from './styles/stylesheet';

class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <HomePage/>
      </View>
    );
  }
};

Expo.registerRootComponent(App);
