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
  Switch,
  Animated,
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
import Calendar from 'react-native-calendar';
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
      return Navigator.SceneConfigs.VerticalUpSwipeJump
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
      date: this.state.date,

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
                  date={(this.state && this.state.date) || new Date()}
                  onDateChange={(newDate) => {
                    this.setState({date: newDate})
                  }}
                  mode={'date'}
                  timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
        </View>
    );


    return (
          <View style={styles.container}>
          <View style = {styles.detailsTop}>
          <Text style = {{fontSize: 30, color: 'white', top: 170, borderRadius: 5,}}> Details </Text>
          <Text style = {{fontSize: 13, color: 'white', top: 180}}> Write down your love details </Text>
          </View>
        <TextInput style={styles.nameInput} value={this.state.yourName} placeholder="Your name" onChangeText={(str) => this.onName(str)} />
        <TextInput style={styles.nameInput} value={this.state.partnerName} placeholder="Partner's name" onChangeText={(str) => this.onPartnerName(str)} />
        <View style = {styles.nameInput}>
        <TouchableWithoutFeedback onPress = {this.toggleDatePicker.bind(this)}>
        <View value = {this.state.date}>
          <Text style = {{color: '#8F8E94'}}> {(this.state.date.getMonth()+1)}/{this.state.date.getDate()}/{this.state.date.getFullYear()}</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
        {this.state.datePickerMode == 'visible' ? datePicker : false}
        <TouchableHighlight style = {styles.button} onPress = {() => this.navigate('yourName', 'partnerName', 'date' )}>
       <Text style = {{color: '#FFF'}}> Start </Text>
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
    tintColor='#FF4981'>
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
              partnerName= {this.props.partnerName}
              date = {this.props.date} />
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
         <Settings  yourName= {this.props.yourName}
               partnerName= {this.props.partnerName}
               date = {this.props.date} />
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

class CalendarPage extends Component {
  constructor (props) {
  super (props);
    this.state = {
      selectedDate: moment().format(),
      AddEvent: false,
      calendarBox: "",
    };
    this.onAddEvent = this.onAddEvent.bind(this);
  }

    navigate (type = 'Normal'){
  this.props.navigator.push({
    name: 'AddEvent',
    component: AddEvent,
    type: type,
  })
}

onAddEvent() {
this.setState({
  AddEvent: !this.state.AddEvent
})

}

  render () {
    const hidden = this.state.AddEvent ? '' : 'hidden';

  return (

<View style={styles.calendarStyle}>
        <Calendar
          eventDates={['2016-05-20']}
          scrollEnabled={false}
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
            currentDayCircle: {backgroundColor: '#FF4981'},
            currentDayText: {color: '#FF4981'},
            }}
            />
        <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
        <View value = {this.state.calendarBox}>
        <Icon.Button name ="ios-heart" color="#FF4981" backgroundColor = "#FFF" alignItems= 'center' justifyContent= 'center' onPress = {() => this.navigate('Modal')}>
        <Text style = {{alignItems: 'center'}}> Add Event </Text>
        </Icon.Button>
        <Text> {this.props.date} </Text>
        <Text> {this.props.sex} </Text>

        <Text style = {{fontSize: 16}}> {this.props.notes} </Text>
        </View>
    </View>

  );
 }
}


class AddEvent extends Component {
  constructor (props) {
  super (props);
    this.state = {
      notes: "",

    }
  }

  state = {
    datefalseSwtichIsOn: false,
    sexfalseSwtichIsOn: false,
  }

  onNotes(str) {
    this.setState({notes: str});
  }


    render () {
  return (
    < View style = {{flex: 1}}>
    <NavigationBar
      title = {{title: 'Add Event', }}
      leftButton = {{title : 'Cancel', tintColor: '#FF4981', handler:() => this.props.navigator.pop() }}
      rightButton = {{title: 'Done', tintColor: '#FF4981', handler:() => this.props.navigator.pop({title: 'CalendarPage', component: CalendarPage, passProps: {notes: this.state.notes}})
   }}
      />

    <Text> Date Night </Text>
             <Switch
        onValueChange = {(value) => this.setState({datefalseSwtichIsOn: value})}
        value = {this.state.datefalseSwtichIsOn}
        onTintColor = "#FF4981"/>

      <Text> Sexual Relations</Text>
            <Switch
        onValueChange = {(value) => this.setState({sexfalseSwtichIsOn: value})}
        value = {this.state.sexfalseSwtichIsOn}
        onTintColor = "#FF4981"/>
        <View value = {this.state.notes}>
      <Text> Notes </Text>
      <TextInput style = {styles.nameInput} placeholder= "Time and Location" value={this.state.notes} onChangeText={(str) => this.onNotes(str)}/>
      </View>
    </View>

  );
    }
  }


  class Settings extends Component {
    constructor(props) {
    super (props);
      this.state = {
        date : new Date(),
      }
    }


    onDateChange( date ) {
      this.setState ({date: date});
    }

  render () {


  return (

<View style= {styles.container} >
  <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
        <Text style = {styles.settingDescription}> About </Text>
        <Text style = {{marginTop:10}}> Inseo Baek</Text>
        <Text> Credits to... </Text>
        <Text style = {styles.settingDescription}> Change Names </Text>
        <TextInput style = {styles.settingInput} placeholder= "New Your Name"/>
        <TextInput style = {styles.settingInput} placeholder= "New Partner Name"/>
        <Text style = {styles.settingDescription}> Change First Date </Text>
        <DatePickerIOS
                  date={(this.state && this.state.date) || new Date()}
                  onDateChange={(newDate) => {
                    this.setState({date: newDate})
                  }}
                  mode={'date'}
                  timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
              </View>
              <TouchableHighlight style = {{marginTop: 10, padding: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FABE3B', marginLeft: 100, marginRight: 100}}>
           <Text style = {{color: '#FFF', fontSize: 12}}> Update </Text>
           </TouchableHighlight>
        </View>


  );
 }
}




const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  detailsTop: {
    backgroundColor: '#FABE3B',
    height: 280,
    alignItems: 'center',
  },

  nameInput: {
    alignItems: 'flex-start',
    justifyContent : 'flex-start',
    backgroundColor: "#EDEDED",
    padding: 20,
    color: "#8F8E94",
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
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
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#FF4981',
    marginTop: 40,
    padding: 8,
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

  calendarBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },

settingInput: {
  alignItems: 'flex-start',
  justifyContent : 'flex-start',
  backgroundColor: "#EDEDED",
  padding: 20,
  color: "#8F8E94",
  marginLeft: 40,
  marginRight: 40,
  marginTop: 10,
  borderRadius: 5,
},

settingDescription: {
  backgroundColor : '#FF4981',
  color: '#FFF',
  fontSize: 12,
  padding: 5,
  borderRadius: 5,
  marginTop: 10,

}

});

AppRegistry.registerComponent('newBlossom', () => Project);
