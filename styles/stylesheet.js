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

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

let styles = StyleSheet.create({
  main: {
    display: 'flex',
    backgroundColor: 'red',
    // justifyContent: 'center',
    // alignContent: 'column',
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
    fontSize: 25,
    alignSelf:'center',
  },
  bottomScroll: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    margin: 8,
    marginRight: 15,
    backgroundColor: 'blue'
    // alignContent: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  poster: {
    height: WINDOW_HEIGHT / 4.5,
    width: WINDOW_WIDTH / 3.5,
    display: 'flex',
    margin: 5,
    marginTop: 5,
    border: 'outset',
    borderWidth: 3,
    borderColor: 'red',  
  },
  header: {
    height: WINDOW_HEIGHT / 4.2,
    width: WINDOW_WIDTH / 1.1,
    display: 'flex',
    margin: 11,
    marginTop: 10,
    marginBottom: 200,
  },
});

module.exports = styles;