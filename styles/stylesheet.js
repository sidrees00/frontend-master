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
    borderWidth: 10,
    // borderColor: '#CEDFE9'
  },
  text: {
    color: 'white',
    fontSize: 23,
    alignSelf:'center',
    fontWeight: '300',
    fontFamily: 'roboto',
  },
  bottomScroll: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#141414',
  },
  scroll: {
    height: WINDOW_HEIGHT / 5,
    width: WINDOW_WIDTH / 4,
    backgroundColor: 'red',
    display: 'flex',
    margin: 4,
  },
  selected: {
    height: WINDOW_HEIGHT / 5,
    width: WINDOW_WIDTH / 4,
    backgroundColor: 'red',
    display: 'flex',
    margin: 4,
    borderWidth: 4,
    borderColor: 'red',  
  },
});

module.exports = styles;