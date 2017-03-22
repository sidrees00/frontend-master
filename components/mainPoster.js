import React from 'react';
import {Image} from 'react-native';

// will render large centered program poster
function MainPoster(props) {
  return (
    <Image 
      source={props.source} 
      style={props.style}>
    </Image>
  )
};

MainPoster.propTypes = {
  source: React.PropTypes.string.isRequired,
  style: React.PropTypes.object.isRequired
};

module.exports = MainPoster;