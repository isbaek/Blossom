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

export default class Settings extends Component {
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