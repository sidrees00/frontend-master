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
  constructor(props){
    super(props)
    this.state={
      main: require('../images/gaycation.jpg')
    }
  }
  handleClick(pic){
    this.setState({main: pic})
  }
  render () {
    return (
     <ScrollView> 
      <View style={styles.top}>
      <Image source={this.state.main} style={styles.main} ></Image>
      </View>
      <ScrollView style={styles.outside} horizontal={true}>
        <View style={styles.container}>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/gaycation.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/gaycation.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/huangsworld.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/huangsworld.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/kingoftheroad.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/kingoftheroad.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/lastchancehigh.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/lastchancehigh.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/loveindustries.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/loveindustries.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/pilotweek.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/pilotweek.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/statesofundress.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/statesofundress.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/woman.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/woman.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.handleClick.bind(this, require('../images/worldofsports.jpg'))}
            style={styles.poster}>
              <Image 
                source={require('../images/worldofsports.jpg')}
                style={styles.poster}>
              </Image>
          </TouchableHighlight>
        </View>
       </ScrollView>
       </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  top: {

  },
  outside: {
    // backgroundColor: '#141414',
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    marginTop: 10,
    // alignContent: 'row',
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
  },
  main: {
    marginTop: 30,
    height: WINDOW_HEIGHT / 1.6,
    width: WINDOW_WIDTH / 1.3,
    display: 'flex',
    backgroundColor: '#141414',
    alignSelf: 'center',

  },
});
