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
function Subtitle(props) {
  return <Text style={[styles.Subitle]}>{props.children}</Text>;
}

function FormInput(props) {
  return <TextInput style={styles.center, styles.FormInput} {...props} />
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
    <View style= {styles.Container}>
     <TopBar/>
     <Container height = {4}>
     <Subtitle>Name Details</Subtitle>
        <FormInput placeholder="Your name" placeholderTextColor='rgba(0,0,0,0.2)' />
        <FormInput placeholder="Partner's name" placeholderTextColor="#ddd"  />
      </Container>
    </View>
  );
 }
}
