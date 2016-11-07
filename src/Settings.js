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
import styles from './Settings.styles'
import TopBar from './TopBar'

////
// Containers
////

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
function SubTitle(props) {
  return <Text style={[styles.SubTitle]}>{props.children}</Text>;
}

function Form(props) {
  return <View style={styles.Form} {...props} />;
}

function FormInput(props) {
  return <View style={styles.FormInputHolder}>
    <Text style={styles.FormInputTitle}>{props.placeholder}</Text>
    <TextInput style={styles.FormInput} placeholder={props.placeholder} placeholderTextColor="#bbb" />
  </View>
}


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
    <View>
      <TopBar/>
      <SubTitle>Couple info</SubTitle>
      <Form>
        <FormInput placeholder="Your name" />
        <FormInput placeholder="Partner's name" />
      </Form>
        <SubTitle>Credits</SubTitle>

    </View>
  );
 }
}
