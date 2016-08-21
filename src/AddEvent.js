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

//Navigation Bar Library
import NavigationBar from 'react-native-navbar'

export default class AddEvent extends Component {
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
    <View style = {{flex: 1}}>
    <NavigationBar
      title = {{title: 'Add Event', }}
      leftButton = {{title : 'Cancel', tintColor: '#FF4981', handler:() => this.props.navigator.pop() }}
      rightButton = {{title: 'Done', tintColor: '#FF4981', handler:() => this.props.navigator.pop()
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
