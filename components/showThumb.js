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
                source={require('../images/vicehbo.jpg')}
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
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 50,
    alignContent: 'row',
    margin: 8,
  },
  poster: {
    height: WINDOW_HEIGHT / 4.5,
    width: WINDOW_WIDTH / 3.5,
    display: 'flex',
    margin: 5,
  }
});