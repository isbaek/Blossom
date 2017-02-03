import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TabBarIOS,
  Navigator,
  Switch,
  ScrollView
} from 'react-native'
import TabBar from './TabBar'
import styles from './Details.styles'

import blossomimg from '../design/background.png'

import DismissKeyboard from 'dismissKeyboard';

import DatePicker from 'react-native-datepicker'
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

function Title(props) {
  return <Text style={[styles.TitleText, styles.Title]}>{props.children}</Text>;
}

function Subtitle(props) {
  return <Text style={[styles.TitleText, styles.Subtitle]}>{props.children}</Text>;
}

function Form(props) {
  return <View style={[styles.center, styles.Form]}>{props.children}</View>;
}

function FormInput(props) {
  return <TextInput style={styles.FormInput} {...props} />
}

// FormField is like FormInput but not specifically a text input
function FormField(props) {
  return (
     <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.DateInput}>{props.children}</View>
    </TouchableWithoutFeedback>
    );
  }

function Button(props) {
  return (
  <TouchableHighlight style={[styles.Button, styles.center]} onPress={props.onPress}>
    <Text style={styles.ButtonText}>{props.children}</Text>
  </TouchableHighlight>
  );
}

function BackgroundImage(props) {
  return <Image resizeMode='contain' style={{position:'absolute'}} {...props} />;
}

////
// Details
////

class Details extends Component {
  constructor() {
    super();
    this.state = {
      yourName: null,
      partnerName: null,
      date: null,
      datePicker: false,
    };
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

    // Go to home
    this.goToHome();
  }

  goToHome() {
    this.props.navigator.resetTo({
      name: 'TabBar',
      component: TabBar,
    })
  }


  renderButton() {
    return (
      <Button onPress={() => this.onSave()}>Start</Button>
    );
  }

//dismisses keyboard from text input on dateinput so the user doesnt have to tap on 'return' manually
  _dismissKeyboard() {
    Keyboard.dismiss();
  }



  render() {
    return (
      <Container>
        <BackgroundImage source={blossomimg} />
        <Container height={4}>
          <Title>Welcome</Title>
          <Subtitle>Write down your love details</Subtitle>
        </Container>
        <Container height={4} style={{justifyContent: 'flex-start'}}>
        <Form>
            <FormInput
            value={this.yourName()}
            placeholder="Your name"
            placeholderTextColor="#ddd"
            onChangeText={(str) => this.onName(str)}/>
            <FormInput
            value={this.partnerName()}
            placeholder="Partner's name"
            placeholderTextColor="#ddd"
            onChangeText={(str) => this.onPartnerName(str)} />
          <FormField onPress={this._dismissKeyboard.bind(this)}>
              <DatePicker
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start'
                },
                dateText: {
                  color: '#fff',
                }
              }}
              placeholder="Enter date"
              showIcon={false}
                date={this.firstDate()}
                onDateChange={(newDate) => {
                  this.setState({date: newDate})
                }}
                mode='date'
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                maxDate={new Date()}
                minDate={new Date('1/1/2000')}
                timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
        </FormField>
      </Form>
    </Container>
      <Container height = {4}>
          {this.renderButton()}
        </Container>
      </Container>
    );
  }
}

export default Details;
