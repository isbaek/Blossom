  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
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
  ListView,
  Switch,
} from 'react-native'

// Map mood names to images
var MOODS = {
  "warm":         require('./design/warm.png'),
  "sunny":        require('./design/sunny.png'),
  "cloudy":       require('./design/cloudy.png'),
  "suncloudy":    require('./design/suncloudy.png'),
  "thunderstorm": require('./design/thunderstorm.png'),
}
// Default order of moods
var MOOD_LIST =  ["sunny", "cloudy", "thunderstorm", "warm", "suncloudy"];

//Calendar Library
var Calendar = require('react-native-calendar');
var moment = require('moment');

//Navigation Bar Library
import NavigationBar from 'react-native-navbar';

//Custom Vector Icons
import Icon from 'react-native-vector-icons/Ionicons';

//UITableView Library


//INITIAL
class Project extends Component {

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }


    return Navigator.SceneConfigs.PushFromRight

  }

    render () {
    return (
<Navigator
         initialRoute={{
           title: 'Details',
           component: Details,
         }}
          configureScene = {this.configureScene}

         renderScene={(route, navigator) => {
          console.log(route, navigator);
          if (route.component) {
            return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route} )}
         }} />


    );
  }
}

class Details extends Component {
    constructor() {
    super();
    this.state = {
      yourName: "",
      partnerName: "",
      date: new Date(),
      datePickerMode: 'hidden',
    };
 }

  toggleDatePicker() {
  var mode = this.state.datePickerMode == 'hidden' ? 'visible' : 'hidden';
  this.setState ({datePickerMode : mode});
}

  onDateChange( date ) {
    this.setState ({date: date});
  }

  //set variables to string aka user inputed data onChangeText()
  onName(str) {
    this.setState({yourName: str});
  }

  onPartnerName(str) {
    this.setState({partnerName: str});
  }

  navigate (){
  this.props.navigator.push({
    name: 'TabBar',
    component: TabBar,
    //Passes data that user inputed
    passProps: {
      yourName: this.state.yourName,
      partnerName: this.state.partnerName,

    },


  })
}

  render () {
       var datePicker =  (
      <View style = {styles.datePicker}>
    <TouchableOpacity onPress = {this.toggleDatePicker.bind(this)} style = {{padding : 5, alignItems: 'flex-end'}}>
      <Text>Done</Text>
      </TouchableOpacity>
        <DatePickerIOS
                  loveDate={(this.state && this.state.loveDate) || new Date()}
                  onDateChange={(newDate) => {
                    this.setState({date: newDate})
                  }}
                  mode={'date'}
                  timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
        </View>
    );


    return (
          <View style={styles.container}>
        <TextInput style={styles.nameInput} value={this.state.yourName} placeholder="Your name" onChangeText={(str) => this.onName(str)} />
        <TextInput style={styles.nameInput} value={this.state.partnerName} placeholder="Partner's name" onChangeText={(str) => this.onPartnerName(str)} />
        <View style = {{padding: 20, marginTop: 100}}>
        <TouchableWithoutFeedback onPress = {this.toggleDatePicker.bind(this)}>
        <View style = {styles.nameInput} value = {this.state.date}>
          <Text> {(this.state.date.getMonth()+1)}/{this.state.date.getDate()}/{this.state.date.getFullYear()}</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
        {this.state.datePickerMode == 'visible' ? datePicker : false}

         <TouchableHighlight style = {styles.button} onPress = {() => this.navigate('yourName', 'partnerName' )}>
        <Text> Start </Text>
        </TouchableHighlight>
      </View>
    );
  }
}



 class TabBar extends Component {

    constructor (props) {
  super (props);
    this.state = {
      selectedTab: 'Home',
  };
    }
    render () {
    return (
<TabBarIOS
    tintColor='#FE2851'>
        <Icon.TabBarItem
          selected = {this.state.selectedTab === 'Home'}
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          onPress={() => {
            this.setState({
              selectedTab: 'Home',
            });
          }}>
        <Home yourName= {this.props.yourName}
              partnerName= {this.props.partnerName} />
            </Icon.TabBarItem>
          <Icon.TabBarItem
          selected = {this.state.selectedTab === 'CalendarPage'}
          iconName="ios-calendar-outline"
          selectedIconName="ios-calendar"
          onPress={() => {
            this.setState({
              selectedTab: 'CalendarPage',
            });
          }}>
         <CalendarPage navigator = {this.props.navigator}/>
        </Icon.TabBarItem>
          <Icon.TabBarItem
          selected = {this.state.selectedTab === 'Settings'}
          iconName="ios-settings-outline"
          selectedIconName="ios-settings"
          onPress={() => {
            this.setState({
              selectedTab: 'Settings',
            });
          }}>
         <Settings/>
        </Icon.TabBarItem>
      </TabBarIOS>

    );
  }
};



class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      mood: "sunny",
    };
 }

  onMoodClick (
  ) {
    // Pick a random mood
    var mood = MOOD_LIST[Math.floor(Math.random()*MOOD_LIST.length)];
    this.setState ({mood: mood});
  }

  getMoodImage(moodName) {
    return MOODS[moodName];
  }



  render () {


  return (

<View style={styles.container}>
  <Text style = {{paddingTop: 50}} > Loving Days   </Text>
  <Text>Since {this.props.yourName} and {this.props.partnerName} met</Text>
  <Text style = {{fontSize: 40, justifyContent : 'center', flex: 1, paddingTop: 20}}>Your Mood Today is... </Text>
  <TouchableHighlight onPress = {() => this.onMoodClick()} >
  <Image source = {this.getMoodImage(this.state.mood)} style = {styles.moody} resizeMode='contain' ></Image>
  </TouchableHighlight>
    </View>
  );
 }
}

class CalendarPage extends Component {
  constructor (props) {
  super (props);
    this.state = {
      selectedDate: moment().format(),
    }
  }

    navigate (type = 'Normal'){
  this.props.navigator.push({
    name: 'AddEvent',
    component: AddEvent,
    type: type,
  })
}

  render () {
  return (
<View style={styles.calendarStyle}>
        <Calendar
          eventDates={['2016-05-20']}
          scrollEnabled={true}
          showControls={true}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.setState({selectedDate: date})}
          onTouchPrev={() => console.log('Back TOUCH')}
          onTouchNext={() => console.log('Forward TOUCH')}
          onSwipePrev={() => console.log('Back SWIPE')}
          onSwipeNext={() => console.log('Forward SWIPE')}
          customStyle={{
            calendarContainer: {backgroundColor: 'white'},
            currentDayCircle: {backgroundColor: '#FE2851'},
            currentDayText: {color: '#FE2851'},
            }}
            />
        <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
           <TouchableHighlight style = {styles.button} onPress = {() => this.navigate('Modal')}>
        <Text> Add Event </Text>
        </TouchableHighlight>
    </View>

  );
 }
}


class AddEvent extends Component {
  state = {
    datefalseSwtichIsOn: false,
    sexfalseSwtichIsOn: false,
  }


    render () {
  return (
    < View style = {{flex: 1}}>
    <NavigationBar
      title = {{title: 'Add Event', }}
      leftButton = {{title : 'Cancel', tintColor: '#FE2851', handler:() => this.props.navigator.pop(),}}
      rightButton = {{title: 'Done', tintColor: '#FE2851', handler:() => this.props.navigator.pop()
   }}
      />

    <Text> Date Night </Text>
             <Switch
        onValueChange = {(value) => this.setState({datefalseSwtichIsOn: value})}
        value = {this.state.datefalseSwtichIsOn}
        onTintColor = "#FE2851"/>

      <Text> Sexual Relations</Text>
            <Switch
        onValueChange = {(value) => this.setState({sexfalseSwtichIsOn: value})}
        value = {this.state.sexfalseSwtichIsOn}
        onTintColor = "#FE2851"/>

      <Text> Notes </Text>
      <TextInput style = {styles.nameInput} placeholder= "Time and Location"/>

    </View>

  );
    }
  }


  class Settings extends Component {


  render () {
  return (
<View style={{flex:1}}>

  <Text> About</Text>
  <Text> Modify Name</Text>
    <Text> Change Start Date</Text>


    </View>
  );
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE2851',
  },
  nameInput: {
    height: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    margin: 20,
    color: "#333",
  },
  datePicker : {
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 220,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },

  button : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#FFF',
    height: 20,
    marginTop: 50,
  },

    tabContent: {
    flex: 1,
    alignItems: 'center',
  },

  moody: {
    height: 150,
    width: 150,
    alignItems: 'center',
    marginBottom: 200,
  },

  calendarStyle: {
    flex:1,

  },

});

AppRegistry.registerComponent('newBlossom', () => Project);
