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
import data from '../shows.js'
import styles from '../styles/stylesheet'
import Scrollthumb from './scrollThumb'


export default class Container extends React.Component {
  constructor(props){
    super(props)
    this.state={
      main: require('../images/gaycation.jpg'),
      border: {
        borderColor: 'red',
        borderWidth: 4,
        border: 'solid',
      },
    }
  }
  handleClick(pic){
    this.setState({main: pic})
  }
  render () {
    var Show = data.map((show) => {
      var url = show.product_image_url
      return(
        <Scrollthumb
          onPress={this.handleClick.bind(this, url)}
          source={url}
          style={styles.poster}>
        </Scrollthumb>)
    })

    return (
      <View> 
        <View style={styles.main}>
          <Image 
            source={this.state.main} 
            style={styles.mainPoster} >
          </Image>
          
          <Text
            style={styles.text}>
            {data[0].title + ' Episodes: ' + data[0].episodes}
          </Text>
        </View>

        <ScrollView style={styles.bottomScroll} horizontal={true}>
            {Show}
         </ScrollView>
      </View>
    )
  }
}