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
import data from '../shows.json'


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class showThumb extends React.Component {
  constructor(props){
    super(props)
    this.state={
      main: require('../images/gaycation.jpg'),
      border: {
        borderColor: 'red',
        borderWidth: 4,
        border: 'solid',
      }
    }
  }

  handleClick(pic){
    this.setState({main: pic})
  }
  render () {
    return (
      <View> 
        <View style={styles.main}>
          <Image source={this.state.main} style={styles.mainPoster} ></Image>
          <Text style={styles.text}>
            {data[0].title + ' Episodes: ' + data[0].episodes}
          </Text>
        </View>


        <ScrollView style={styles.bottomScroll} horizontal={true}>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/gaycation.jpg'))}>
                <Image 
                  source={require('../images/gaycation.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/huangsworld.jpg'))}>
                <Image 
                  source={require('../images/huangsworld.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/kingoftheroad.jpg'))}>
                <Image 
                  source={require('../images/kingoftheroad.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/lastchancehigh.jpg'))}>
                <Image 
                  source={require('../images/lastchancehigh.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/loveindustries.jpg'))}>
                <Image 
                  source={require('../images/loveindustries.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/pilotweek.jpg'))}>
                <Image 
                  source={require('../images/pilotweek.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/statesofundress.jpg'))}>
                <Image 
                  source={require('../images/statesofundress.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/woman.jpg'))}>
                <Image 
                  source={require('../images/woman.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.handleClick.bind(this, require('../images/worldofsports.jpg'))}>
                <Image 
                  source={require('../images/worldofsports.jpg')}
                  style={styles.poster}>
                </Image>
            </TouchableHighlight>
         </ScrollView>
      </View>
    )
  }
}

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
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    marginTop: 10,
    // alignContent: 'row',
    margin: 8,
    marginRight: 15,
    backgroundColor: 'blue'
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