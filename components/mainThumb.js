import React from 'react';
import {Image} from 'react-native';

function MainThumb(props){
  return (
    <Image 
      source={props.source} 
      style={props.style} >
    </Image>
  )
}

module.exports = MainThumb;