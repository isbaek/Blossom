import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  DatePickerIOS,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TabBarIOS,
  Navigator,
  Switch,
  Animated,
} from 'react-native'
import TabBar from './TabBar'
import styles from './styles'

// Map mood names to images
var MOODS = {
  "warm":         require('../design/warm.png'),
  "sunny":        require('../design/sunny.png'),
  "cloudy":       require('../design/cloudy.png'),
  "suncloudy":    require('../design/suncloudy.png'),
  "thunderstorm": require('../design/thunderstorm.png'),
}
// Default order of moods
var MOOD_LIST =  ["sunny", "cloudy", "thunderstorm", "warm", "suncloudy"];

export default class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      mood: "sunny",
    };
 }

  onMoodClick() {
    // Pick a random mood
    var mood = MOOD_LIST[Math.floor(Math.random()*MOOD_LIST.length)];
    this.setState ({mood: mood});
  }

  getMoodImage(moodName) {
    return MOODS[moodName];
  }

  render () {
    //Get User Inputed Date and convert to loving days
    var now = new Date();
    var secondsSince = (now.getTime() - this.props.date.getTime()) / 1000;
    var daysSince = Math.floor(secondsSince / 86400);

  return (
    <View style={styles.container}>
  <View style = {{alignItems: 'center', justifyContent: 'center'}}>
    <Text style = {{color: '#FFF', marginTop: 90, fontSize: 85, backgroundColor: '#FF4981', borderRadius: 5, }}> {(daysSince +1)} </Text>
    <Text style = {{color: '#FF4981', padding: 10, fontSize: 15}}> Loving Days </Text>
  <Text style = {{color: '#FFF', padding: 10, fontSize: 15, backgroundColor: '#FF4981', borderRadius: 5,}} >Since {this.props.yourName} and {this.props.partnerName} met</Text>
  <Text style = {{color: '#FF4981', fontSize: 15, padding: 50}}>Your Mood Today is... </Text>
  <TouchableHighlight onPress = {() => this.onMoodClick()} >
  <Image source = {this.getMoodImage(this.state.mood)} style = {styles.moody} resizeMode='contain' ></Image>
  </TouchableHighlight>
    </View>
    </View>
  );
 }
}
