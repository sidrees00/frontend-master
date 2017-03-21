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
import styles from '../styles/stylesheet'
import Scrollthumb from './scrollThumb'

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
            
            <Scrollthumb 
              onPress={this.handleClick.bind(this, require('../images/gaycation.jpg'))}
              source={require('../images/gaycation.jpg')}
              style={styles.poster}>
            </Scrollthumb>

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