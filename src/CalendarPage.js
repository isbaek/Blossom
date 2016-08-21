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
import styles from './styles'
import AddEvent from './AddEvent'
import TopBar from './TopBar'

// Calendar Library
import moment from 'moment'
import Calendar from 'react-native-calendar'
// Custom Vector Icons
import Icon from 'react-native-vector-icons/Ionicons'

export default class CalendarPage extends Component {
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
      <TopBar/>
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
