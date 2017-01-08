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
} from 'react-native'
import AddEvent from './AddEvent'
import TabBar from './TabBar'
import styles from './Home.styles'
import TopBar from './TopBar'

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


function Container(props) {
  return (
    <View style={[
        styles.Container, styles.center,
        (props.style || {}), {flex: (props.height || 1)},
    ]}>
      {props.children}
    </View>
  );
}



function LovingDaysNumber(props) {
  return <Text style={[styles.LovingDays, styles.LovingDaysNumber]}>{props.children}</Text>;
    }

function LovingDaysText(props) {
  return <Text style={[styles.LovingDays, styles.LovingDaysText]}>{props.children}</Text>;
    }

function LovingDaysCoupleText(props) {
  return <Text style={[styles.LovingDays, styles.LovingDaysCoupleText]}>{props.children}</Text>;
    }

function MoodTodayText(props) {
  return <Text style={[styles.MoodTodayText]}>{props.children}</Text>;
    }

function MoodTodayImage(props) {
  return <Image resizeMode='contain' {...props}/>;
}

function TipText(props) {
  return <Text style={[styles.TipText]}>{props.children}</Text>;
    }


class Home extends Component {
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
  
  goToAdd() {
    this.props.navigator.push({
      name: 'AddEvent',
      component: AddEvent,
      type: 'Modal',
    })
  }

  render () {
    //Get User Inputed Date and convert to loving days
    var now = new Date();
    var secondsSince = (now.getTime() - this.props.couple.firstDate.getTime()) / 1000;
    var daysSince = Math.floor(secondsSince / 86400);

    //go to add event page


  return (
  <View style = {{flex:1}}>
  <TopBar 
  rightButton = {{
    title: 'Add', 
    tintColor: '#FFF', 
    handler: () => this.goToAdd()
  }}/>
  <Container>
          <Container height = {3}>
            <LovingDaysNumber>{(daysSince +1)}{"\n"}
              <LovingDaysText>DAYS</LovingDaysText>
            </LovingDaysNumber>
            <LovingDaysCoupleText> Since {this.props.couple.you.name} and {this.props.couple.partner.name} met </LovingDaysCoupleText>
          </Container>
          <Container height = {2}>
                <TouchableWithoutFeedback onPress = {() => this.onMoodClick()}>
                  <MoodTodayImage source = {this.getMoodImage(this.state.mood)} style = {[styles.center, styles.MoodTodayImage]}></MoodTodayImage>
                </TouchableWithoutFeedback>
          </Container>
          <Container height = {1}>
          </Container>
      </Container>
    </View>
  );
 }
}


export default Home;
