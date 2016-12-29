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
import styles from './AddEvent.styles'

import Icons from './Icons'

//Navigation Bar Library
import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/Ionicons'

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

function CurrentDate(props) {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center', padding: 20}}>
      <View>
        <Text style={{fontSize: 70}}>29</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#777', fontSize: 30,}}>Dec </Text>
        <Text style={{color: '#444', fontSize: 30,}}>2016</Text>
      </View>
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

export default class AddEvent extends Component {
  constructor (props) {
  super (props);
    this.state = {
      notes: "",

      sex: false,
      fight: false,
      nightIn: false,
      nightOut: false,
    }
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
      date: new Date("2016-08-29"),
      sex: this.state.sex,
      fight: this.state.fight,
      nightIn: this.state.nightIn,
      nightOut: this.state.nightOut,
      notes: this.state.notes,
    })

    // TODO: Go back to calendar
  }

  render () {
  return (
    <View style = {{flex: 1}}>
      <NavigationBar
        title = {{title: 'Add Event', }}
        leftButton = {{title : 'Cancel', tintColor: '#FF4981', handler:() => this.props.navigator.pop() }}
        rightButton = {{title: 'Done', tintColor: '#FF4981', handler:() => this.onSave() }}
      />

      <CurrentDate />

      <DateTypeGrid onTypeChange={this.onTypeChange.bind(this)} {...this.state} />

      <View style={styles.Notes}>
        <TextInput
          style={styles.NotesInput}

          multiline={true}
          placeholder={"Notes about the day ...\n\nRemember the best parts :)"}
          onChangeText={this.onNotes.bind(this)}
        />
      </View>

      <AddButton onPress={this.onSave.bind(this)} />
    </View>
  );
 }
}
