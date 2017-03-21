import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../styles/stylesheet'

function ScrollThumb(props){
  return(
    <TouchableHighlight 
      onPress={props.onPress}>
      <Image 
        source={props.source}
        style={props.style}>
      </Image>
    </TouchableHighlight>
  )
}

module.exports = ScrollThumb;