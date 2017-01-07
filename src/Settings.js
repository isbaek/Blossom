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

function FormInputTitle(props) {
  return <Text style={styles.FormInputTitle}>{props.children}</Text>
}

function FormInput(props) {
  return <View style={styles.FormInputHolder}>
    <FormInputTitle>{props.title || props.placeholder}</FormInputTitle>
    <TextInput style={styles.FormInput} {...props} placeholderTextColor="#bbb" />
  </View>
}

function FormDateInput(props) {
  return <View style={styles.FormInputHolder}>
    <FormInputTitle>{props.title || props.placeholder}</FormInputTitle>
    <Text style={styles.FormInput}>{props.value}</Text>
  </View>
}

function DateToString(date) {
  return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
}


export default class Settings extends Component {
  constructor(props) {
  super (props);
    this.state = {
      datePicker: false,
    }
  }

    toggleDatePicker() {
      var mode = !this.state.datePicker;
      this.setState ({datePicker : mode});
    }

    onDateChange(date) {
      this.setState ({date: date});
    }

    //set variables to string aka user inputed data onChangeText()
    onName(str) {
      this.setState({yourName: str});
    }

    onPartnerName(str) {
      this.setState({partnerName: str});
    }

    yourName() {
      return (this.state.yourName !== null ? this.state.yourName : this.props.couple.you.name);
    }

    partnerName() {
      return (this.state.partnerName !== null ? this.state.partnerName : this.props.couple.partner.name);
    }

    firstDate() {
      return (this.state && this.state.date) || this.props.couple.firstDate || new Date();
    }

    onSave() {
      // Set couple in database
      this.props.editCouple({
        "you": {
          "name": this.yourName(),
        },
        "partner": {
          "name": this.partnerName(),
        },
        firstDate: this.firstDate(),
      });
    }


    renderDatePicker() {
        return (
          <View style = {styles.DatePicker}>
            <TouchableOpacity onPress = {this.toggleDatePicker.bind(this)} style = {{padding : 5, alignItems: 'flex-end'}}>
             <Text>Done</Text>
            </TouchableOpacity>
            <DatePickerIOS
              date={this.firstDate()}
              onDateChange={(newDate) => {
                this.setState({date: newDate})
              }}
              mode={'date'}
              timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
          </View>
        );
      }

  render () {
  return (
    <View>
      <TopBar />

      <SubTitle>Couple Info</SubTitle>
      <Form>
        <FormInput placeholder="Your name" value={this.props.couple.you.name} />
        <FormInput placeholder="Partner's name" value={this.props.couple.partner.name} />
      </Form>

      <SubTitle>Couple Date</SubTitle>
      <Form>
        <FormInput title="First Date" value={DateToString(this.firstDate())} />
      </Form>
    </View>
  );
 }
}
