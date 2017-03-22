import React from 'react';
import {Text} from 'react-native';


function MetaText (props) {
  return (
    <Text
      style={props.style}>
      {props.children}
    </Text>
  )
}

module.exports = MetaText;