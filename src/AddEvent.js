import React, { Component } from 'react';
import {
  Alert,
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
import styles from './AddEvent.styles'

import Icons from './Icons'

//Navigation Bar Library
import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/Ionicons'

//import lodash
import _ from 'lodash'
import moment from 'moment';

function HighlighedIcon(props) {
  var style = [styles.HighlighedIcon];
  if(props.active) {
    style = style.concat(styles.HighlighedIconActive);
  }
  return (
  <View style={style}>
    {props.children}
  </View>
  );
}

function DateTypeGrid(props) {
  const rowStyle = {flowDirection: "row",};
  return (
    <View>
      <View style={{flexDirection: 'row', flexWrap: 'nowrap', justifyContent: "space-between"}}>
        <HighlighedIcon active={props.sex} >
          <Icons.Sex inverted={props.sex} onPress={() => props.onTypeChange({sex: !props.sex})} />
        </HighlighedIcon>
        <HighlighedIcon active={props.fight} >
          <Icons.Fight inverted={props.fight} onPress={() => props.onTypeChange({fight: !props.fight})} />
        </HighlighedIcon>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'nowrap', justifyContent: "space-around"}}>
        <HighlighedIcon active={props.nightIn} >
          <Icons.NightIn inverted={props.nightIn} onPress={() => props.onTypeChange({nightIn: !props.nightIn})} />
        </HighlighedIcon>
        <HighlighedIcon active={props.nightOut} >
          <Icons.NightOut inverted={props.nightOut} onPress={() => props.onTypeChange({nightOut: !props.nightOut})} />
        </HighlighedIcon>
      </View>
    </View>
  );
}

function MonthToString(monthNumber) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthNumber];
}

function CurrentDate(props) {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center', padding: 5}}>
      <View>
        <Text style={{fontSize: 60}}>{props.date.getDate()}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#777', fontSize: 30,}}>{MonthToString(props.date.getMonth())} </Text>
        <Text style={{color: '#444', fontSize: 30,}}>{props.date.getFullYear()}</Text>
      </View>
    </View>
  );
}

function DeleteButton(props) {
  return (
    <View style={{marginBottom: 30, marginRight: 30, marginLeft: 30}}>
      <Icon.Button style={{borderRadius: 5, borderColor: 'red', borderWidth: 1}} name ="ios-trash" color="#fff" backgroundColor = "#fff" alignItems= 'center' justifyContent= 'center' onPress={props.onPress}>
        <Text style = {{alignItems: 'center', color: 'red'}}>{props.children}</Text>
      </Icon.Button>
    </View>
  );
}

function Button(props) {
  return (
    <View style={{margin: 30, marginTop: 15, marginBottom: 15}}>
      <Icon.Button style={{borderRadius: 5}} name ="ios-heart" color="#fff" backgroundColor = "#FF4981" alignItems= 'center' justifyContent= 'center' onPress={props.onPress}>
        <Text style = {{alignItems: 'center', color: '#fff'}}>{props.children}</Text>
      </Icon.Button>
    </View>
  );
}

function isSameDay(d1, d2) {
  return moment(d1).format('DD/MM/YYYY') === moment(d2).format('DD/MM/YYYY');
}

export default class AddEvent extends Component {
  constructor (props) {
    super (props);
    this.state = this.getOurDefaultState(props);
  }

  getOurDefaultState(props) {
    // Current date
    const date = props.date || new Date();

    // Default empty state
    const EMPTY_STATE = {
      date: date,
      notes: "",
      sex: false,
      fight: false,
      nightIn: false,
      nightOut: false,

      isNewEvent: true,
    };

    // Check if there's already an event for this date
    const event = _.find(props.events, (e) => {
      return isSameDay(e.date, date);
    });

    // If no event, use the empty state
    if(!event) {
      return EMPTY_STATE;
    }

    // Base our event on a pre-existing one
    return {
      date: date,
      notes: event.notes,
      sex: event.sex,
      fight: event.fight,
      nightIn: event.nightIn,
      nightOut: event.nightOut,

      isNewEvent: false,
    };
  }

  onNotes(str) {
    this.setState({notes: str});
  }

  onTypeChange(change) {
    this.setState({
      ...change,
    });
  }

  onSave() {
    // Add event
    this.props.addEvent({
      // name: "",
      date: this.state.date,
      sex: this.state.sex,
      fight: this.state.fight,
      nightIn: this.state.nightIn,
      nightOut: this.state.nightOut,
      notes: this.state.notes,
    })

    // Go back to previous page
    this.props.navigator.pop();
  }

  onDelete() {
    // Delete event
    this.props.deleteEvent(this.state.date);
    this.props.navigator.pop();
  }

  renderDeleteButton() {
    var resetMessage = "Are you sure you want to delete data?"
    if(!this.state.isNewEvent) {
      return <DeleteButton onPress={() => Alert.alert (
        'Delete Data',
        resetMessage,
        [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: () => this.onDelete()},
        ]
        )}>Delete</DeleteButton>
    }
    return null;
  }

  buttonEditOrAdd() {
    if(!this.state.isNewEvent) {
      return <Button onPress={this.onSave.bind(this)}>Edit</Button>
    }
    return (
      <Button onPress={this.onSave.bind(this)}>Add</Button>
    )
  }

  render () {
  return (
    <View style={styles.Container}>
      <NavigationBar
        title = {{title: 'Add Event', }}
        leftButton = {{title : 'Cancel', tintColor: '#FF4981', handler:() => this.props.navigator.pop() }}
        rightButton = {{title: 'Done', tintColor: '#FF4981', handler:() => this.onSave() }}
      />

      <CurrentDate date={this.state.date} />

      <DateTypeGrid onTypeChange={this.onTypeChange.bind(this)} {...this.state} />

      <View style={styles.Notes}>
        <TextInput
          style={styles.NotesInput}
          value={this.state.notes}
          multiline={true}
          placeholder={"Notes about the day ...\n\nRemember the best parts :)"}
          onChangeText={this.onNotes.bind(this)}
        />
      </View>
      {this.buttonEditOrAdd()}
      {this.renderDeleteButton()}
    </View>
  );
 }
}
