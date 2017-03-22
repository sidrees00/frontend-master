import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  main: {
    display: 'flex',
    backgroundColor: 'red',
  },
  mainPoster: {
    display: 'flex',
    marginTop: 30,
    marginBottom: 7,
    height: WINDOW_HEIGHT / 1.6,
    width: WINDOW_WIDTH / 1.3,
    backgroundColor: '#141414',
    alignSelf: 'center',
    borderWidth: 10,
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
    display: 'flex',
    height: WINDOW_HEIGHT / 5,
    width: WINDOW_WIDTH / 4,
    margin: 4,
    backgroundColor: 'red',
  },
  selected: {
    display: 'flex',
    height: WINDOW_HEIGHT / 5,
    width: WINDOW_WIDTH / 4,
    margin: 4,
    backgroundColor: 'red',
    borderWidth: 4,
    borderColor: 'red',  
  },
});

module.exports = styles;