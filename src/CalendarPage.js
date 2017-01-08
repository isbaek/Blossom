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
import Icons from './Icons'

// Calendar Library
import moment from 'moment'
import Calendar from 'react-native-calendar'
// Custom Vector Icons
import Icon from 'react-native-vector-icons/Ionicons'

////
// Components
////

function CalendarWidget(props) {
  return (
    <Calendar
      eventDates={props.eventDates}
      scrollEnabled={false}
      showControls={true}
      titleFormat={'MMMM YYYY'}
      prevButtonText={'Prev'}
      nextButtonText={'Next'}
      onDateSelect={props.onDateSelect}
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
  );
}

function EventSummary(props) {
  return (
    <View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', padding: 15}}>
        {props.sex ? <Icons.Sex /> : null}
        {props.fight ? <Icons.Fight /> : null}
        {props.nightOut ? <Icons.NightOut /> : null}
        {props.nightIn ? <Icons.NightIn /> : null}
      </View>
      <Text style={{padding: 15,}}>{props.notes || props.name}</Text>
    </View>
  );
}

function EventList(props) {
  return (
    <View>
      {props.events.map((event) => {
        return <EventSummary {...event} />;
      })}
    </View>
  );
}

function AddButton(props) {
  return (
    <View style={{margin: 30}}>
      <Icon.Button style={{borderRadius: 5}} name ="ios-heart" color="#fff" backgroundColor = "#FF4981" alignItems= 'center' justifyContent= 'center' onPress={props.onPress}>
        <Text style = {{alignItems: 'center', color: '#fff'}}> Add Event </Text>
      </Icon.Button>
    </View>
  );
}

////
// Utility functions
////

function dateToString(date) {
  return moment(date).format('YYYY-MM-DD');
}

function dateToTimestamp(date) {
  return date.getTime() / 1000;
}

function sameDay(date1, date2) {
  return dateToString(date1) === dateToString(date2);
}

////
// CalendarPage
////

export default class CalendarPage extends Component {
  constructor (props) {
  super (props);
    this.state = {
      selectedDate: moment().toDate(),
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
    passProps: {
      date: this.state.selectedDate,
    },
  })
}

onAddEvent() {
this.setState({
  AddEvent: !this.state.AddEvent
})

}
  // eventsForDate returns all the events that happened on a given day
  eventsForDate(events, date) {
    return events.filter((event) => {
      return sameDay(event.date, date);
    });
  }

  currentEvents() {
    return this.eventsForDate(this.props.events, this.state.selectedDate);
  }

  eventDates() {
    return this.props.events.map((event) => dateToString(event.date));
  }

  onDateSelect(date) {
    this.setState({selectedDate: moment(date).toDate()})
  }

  renderEventsOrButton() {
    const events = this.currentEvents();
    if(events.length > 0) {
      return <EventList events={events} />;
    }
    return <AddButton onPress={() => this.navigate('Modal')} />;
  }

  render () {
    const hidden = this.state.AddEvent ? '' : 'hidden';

  return (
    <View style={styles.Container}>
      <TopBar/>
      <CalendarWidget eventDates={this.eventDates()} onDateSelect={this.onDateSelect.bind(this)} />
      {this.renderEventsOrButton()}
    </View>
  );
 }
}
