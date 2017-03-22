import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import data from '../shows.js';
import styles from '../styles/stylesheet';
import Scrollthumb from '../components/scrollThumb';
import MainThumb from '../components/mainThumb';
import MetaText from '../components/metaText';


export default class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      main: require('../images/gaycation.jpg'),
      title: 'Gaycation',
      episodes:'24',
      style: styles.scroll,
      selected: styles.selected,
      borderColor: '#596A02',
    }
  }
  _handleClick(a,b,c,d){
    this.setState({main: a, title: b, episodes: c, borderColor: d})
  }
  render () {
    let scrollThumbs = data.map((show) => {
      let url = show.product_image_url,
          title = show.title,
          episodes = show.episodes,
          borderColor = show.borderColor;

      return(
        <Scrollthumb
          onPress={this._handleClick.bind(this, url,title,episodes, borderColor)}
          source={url}
          style={this.state.title === title ? styles.selected : styles.scroll}
          title={title}
          episodes={episodes}>
        </Scrollthumb>)
    });

    return (
      <View> 
        <MainThumb style={styles.main}
          source={this.state.main} 
          style={[styles.mainPoster, {borderColor: this.state.borderColor}]}>
        </MainThumb>
        
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