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
  Alert,
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

function Button(props) {
  return (
  <TouchableHighlight style={[styles.Button, styles.center]} onPress={props.onPress}>
    <Text style={styles.ButtonText}>{props.children}</Text>
  </TouchableHighlight>
  );
}

function ResetButton(props) {
  return (
  <TouchableHighlight style={[styles.ResetButton, styles.center]} onPress={props.onPress}>
    <Text style={{color: '#FF0000', textAlign: 'center'}}>{props.children}</Text>
  </TouchableHighlight>
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

function FormInputTouch(props) {
  return <TouchableWithoutFeedback style={styles.FormInputHolder} onPress={props.onPress}>
    <View style={styles.FormInputHolder}>
    <FormInputTitle>{props.title || props.placeholder}</FormInputTitle>
    <TextInput style={styles.FormInput} editable={false} {...props} onFocus={props.onPress} placeholderTextColor="#bbb" />
    </View>
  </TouchableWithoutFeedback>
}

function DateToString(date) {
  return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
}


export default class Settings extends Component {
  constructor(props) {
  super (props);
    this.state = {
      datePicker: false,
      partnerName: null,
      yourName: null,
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

    onReset() {
      return this.props.resetAll();
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

  renderButtonOrDatePicker() {
    var saveMessage = "Your data has been saved"
    if(this.state.datePicker) {
      return this.renderDatePicker();
    }
    return (
      <Button onPress={() => Alert.alert (
        'Save Data',
        saveMessage,
        [
        {text: 'OK', onPress: () => this.onSave()}
        ],
        {
          cancelable: false
        }
        )}>Save</Button>
    );
  }

  renderResetButton() {
    var resetMessage = "Are you sure you want to reset all of your data?"
    return (
      <ResetButton onPress={() => Alert.alert (
        'Reset Data',
        resetMessage,
        [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: () => this.onReset()},
        ]
        )}>Reset</ResetButton>
    );
  }

  render () {
  return (
    <View>
      <TopBar />

      <SubTitle>Couple Info</SubTitle>
      <Form>
        <FormInput placeholder="Your name" value={this.yourName()} onChangeText={(str) => this.onName(str)} />
        <FormInput placeholder="Partner's name" value={this.partnerName()} onChangeText={(str) => this.onPartnerName(str)} />
      </Form>

      <SubTitle>Couple Date</SubTitle>
      <Form>
          <FormInputTouch title="First Date" value={DateToString(this.firstDate())} onPress={this.toggleDatePicker.bind(this)} />
      </Form>
      {this.renderButtonOrDatePicker()}
      {this.renderResetButton()}
    </View>
  );
 }
}
