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

export default class AddEvent extends Component {
  constructor (props) {
  super (props);
    this.state = {
      notes: "",

      sex: false,
      fight: true,
      nightIn: true,
      nightOut: false,

      datefalseSwtichIsOn: false,
      sexfalseSwtichIsOn: false,
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

  render () {
  return (
    <View style = {{flex: 1}}>
      <NavigationBar
        title = {{title: 'Add Event', }}
        leftButton = {{title : 'Cancel', tintColor: '#FF4981', handler:() => this.props.navigator.pop() }}
        rightButton = {{title: 'Done', tintColor: '#FF4981', handler:() => this.props.navigator.pop() }}
      />

      <DateTypeGrid onTypeChange={this.onTypeChange.bind(this)} {...this.state} />

      <View value = {this.state.notes}>
      <Text> Notes </Text>
      <View style={styles.Notes}>
        <TextInput
          style={styles.NotesInput}

          multiline={true}
          placeholder={"Notes about the day ...\n\nRemember the best parts :)"}
        />
      </View>
      <TextInput style = {styles.nameInput} placeholder= "Time and Location" value={this.state.notes} onChangeText={(str) => this.onNotes(str)}/>
      </View>
    </View>

  );
 }
}
