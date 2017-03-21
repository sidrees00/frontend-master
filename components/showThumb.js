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
import pics from '../shows.json'


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class showThumb extends React.Component {
  render () {
    return (
      <ScrollView style={styles.outside}>
        <View>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/vicehboCopy.jpg')}
                style={styles.header}>
              </Image>
          </TouchableHighlight>
        </View>
          <Text style={styles.text}> Featured Shows </Text>
        <View style={styles.container}>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/gaycation.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/huangsworld.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/kingoftheroad.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/lastchancehigh.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/loveindustries.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/pilotweek.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/statesofundress.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/woman.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={()=> (alert('clicked'))}
            style={styles.poster}>
              <Image 
                source={require('../images/worldofsports.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
        </View>
       </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  outside: {
    backgroundColor: '#141414',
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
    alignContent: 'row',
    margin: 8,
    marginRight: 15,
  },
  poster: {
    height: WINDOW_HEIGHT / 4.5,
    width: WINDOW_WIDTH / 3.5,
    display: 'flex',
    margin: 5,
    marginTop: 5,
  },
  header: {
    height: WINDOW_HEIGHT / 4.2,
    width: WINDOW_WIDTH / 1.1,
    display: 'flex',
    margin: 11,
    marginTop: 10,
    marginBottom: 200,
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 25,
    marginBottom: -5,
  }
});