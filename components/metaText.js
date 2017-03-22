import React from 'react';
import {Text} from 'react-native';

// will render program metadata (e.g. title, episodes)
function MetaText(props) {
  return (
    <Text style={props.style}>
      {props.children}
    </Text>
  )
};

MetaText.propTypes = {
  style: React.PropTypes.object.isRequired
};

module.exports = MetaText;