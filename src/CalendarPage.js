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
  ScrollView,
  Dimensions,
} from 'react-native'
import AddEvent from './AddEvent'
import TopBar from './TopBar'
import Icons from './Icons'

// Calendar Library
import moment from 'moment'
import Calendar from 'react-native-calendar'
// Custom Vector Icons
import Icon from 'react-native-vector-icons/Ionicons'

//import extended stylesheet
import EStyleSheet from 'react-native-extended-stylesheet';
//set rem based on screen size
let {height, width} = Dimensions.get('window');
EStyleSheet.build({styles, rem: width > 400 ? 18 : 16});


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
      customStyle={styles} />
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
      <ScrollView
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.Notes}>{props.notes || props.name}</Text>
      </ScrollView>
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
    <View style={styles.Button}>
      <Icon.Button style={{borderRadius: 5}} name ="ios-heart" color="#fff" backgroundColor = "#FF4981" alignItems= 'center' justifyContent= 'center' onPress={props.onPress}>
        <Text style = {styles.ButtonText}> Add Event </Text>
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

  rightButton() {
    // See if we have any events for the selected date
    const events = this.currentEvents();
    const hasEvents = events.length > 0;

    // Change our button's title
    var buttonMsg = 'Add';
    if(hasEvents) {
      buttonMsg = 'Edit';
    }

    // Actual button
    return {
      title: buttonMsg,
      tintColor: '#FFF',
      handler: () => this.navigate('Modal'),
    };
  }

  render () {

  return (
    <View style={styles.Container}>
        <TopBar
        rightButton={this.rightButton()}
        style={styles.navBar} />
      <Container height ={3}>
        <CalendarWidget eventDates={this.eventDates()} onDateSelect={this.onDateSelect.bind(this)} />
      </Container>
      <Container height ={2}>
        {this.renderEventsOrButton()}
      </Container>
    </View>
  );
 }
}


const styles = EStyleSheet.create({
  Container: {
    flex: 1,
  },

  '@media (max-width: 350)' : {
      calendarContainer: {
        backgroundColor: 'white',
        maxHeight: '2.6rem',
      },
      day: {
        fontSize: '0.75rem',
      },
      title: {
        fontSize: '0.75rem',
      },
      dayHeading:{
        fontSize: '0.75rem',
      },
      weekendHeading: {
        fontSize: '0.75rem',
      },
      controlButtonText: {
        fontSize: '0.75rem',
      },
      currentDayCircle: {
        backgroundColor: '#FF4981',
      },
      currentDayText: {
        color: '#FF4981',
        fontSize: '0.75rem',
      },
      Button:{
        margin: '3rem',
      },
      ButtonText: {
        alignItems: 'center',
        color: '#fff',
        fontSize: '0.75rem'
      },
      //notes
      Notes: {
        padding: '0.9rem',
        color: '#a8a8a8',
        fontSize: '0.75rem'

      }
  },

});
