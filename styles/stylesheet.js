import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

let styles = StyleSheet.create({
  main: {
    display: 'flex',
    backgroundColor: 'red',
  },
  mainPoster: {
    marginTop: 30,
    marginBottom: 7,
    height: WINDOW_HEIGHT / 1.6,
    width: WINDOW_WIDTH / 1.3,
    display: 'flex',
    backgroundColor: '#141414',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 23,
    alignSelf:'center',
  },
  bottomScroll: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#141414'
    // justifyContent: 'space-between',
  },
  scroll: {
    height: WINDOW_HEIGHT / 5,
    width: WINDOW_WIDTH / 4,
    backgroundColor: 'red',
    display: 'flex',
    margin: 4,
    // border: 'solid',
    // borderWidth: 3,
    // borderColor: 'red',  
  },
});

module.exports = styles;