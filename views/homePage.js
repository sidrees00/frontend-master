import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import data from '../shows.js';
import styles from '../styles/stylesheet';
import Scrollthumb from '../components/scrollThumb';
import MainPoster from '../components/mainPoster';
import MetaText from '../components/metaText';


export default class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      main: require('../images/gaycation.jpg'),
      title: 'Gaycation',
      episodes:'24',
      borderColor: '#596A02',
      style: styles.scroll,
      selected: styles.selected,
    }
  };

  // will update main poster and metadata in response to clicked scrollThumb
  _handleClick(url, title, episodes, borderColor){
    this.setState({
      main: url, 
      title: title, 
      episodes: episodes, 
      borderColor: borderColor})
  };

  render() {
    // create scrollThumbs component by mapping through program data
    let scrollThumbs = data.map((show) => {
      let url = show.product_image_url,
          title = show.title,
          episodes = show.episodes,
          borderColor = show.borderColor;

      return (
        <Scrollthumb
          onPress={this._handleClick.bind(this, url, title, episodes, borderColor)}
          source={url}
          style={this.state.title === title ? styles.selected : styles.scroll}>
        </Scrollthumb>)
    });

    return (
      <View> 
        <MainPoster style={styles.main}
          source={this.state.main} 
          style={[styles.mainPoster, {borderColor: this.state.borderColor}]}>
        </MainPoster>
        
        <MetaText
          style={styles.text}>
          {this.state.title}
        </MetaText>

        <MetaText
          style={styles.text}>
          {'Episodes: ' + this.state.episodes}
        </MetaText>
      
        <ScrollView style={styles.bottomScroll} horizontal={true}>
            {scrollThumbs}
        </ScrollView>
      </View>
    )
  }
};