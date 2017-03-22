import React from 'react';
import {
  Image,
  TouchableHighlight,
} from 'react-native';

// will render all shows as thumbnails
function ScrollThumb(props) {
  return (
    <TouchableHighlight 
      onPress={props.onPress}>
      <Image 
        source={props.source}
        style={props.style}>
      </Image>
    </TouchableHighlight>
  )
};

ScrollThumb.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  source: React.PropTypes.string.isRequired,
  style: React.PropTypes.object.isRequired
};

module.exports = ScrollThumb;