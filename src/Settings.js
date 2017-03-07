import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TabBarIOS,
  Navigator,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native'
import styles from './Settings.styles'
import TopBar from './TopBar'
import Details from './Details'

//import custom DatePickerIOS
import DatePicker from 'react-native-datepicker'

//import extended stylesheet
import EStyleSheet from 'react-native-extended-stylesheet';
//set rem based on screen size
let {height, width} = Dimensions.get('window');
EStyleSheet.build({styles, rem: width > 400 ? 18 : 16});

////
// Containers
////

function Container(props) {
  return (
    <View style={[
        styles.Container,
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
    <Text style={styles.ResetButtonText}>{props.children}</Text>
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
  return <View style={styles.DateInputHolder}>{props.children}</View>
}



export default class Settings extends Component {
  constructor(props) {
  super (props);
    this.state = {
      partnerName: null,
      yourName: null,
    }
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
      this.props.resetAll();
      this.goToDetails();
  }

    goToDetails() {
      this.props.navigator.resetTo({
      name: 'Details',
      component: Details,
    })
  }


  renderSaveButton() {
    var saveMessage = "Your data has been saved"
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
    <Container>
      <TopBar />
        <Container height = {5}>
      <SubTitle>Couple Info</SubTitle>
      <Form>
        <FormInput placeholder="Your name" value={this.yourName()} onChangeText={(str) => this.onName(str)} />
        <FormInput placeholder="Partner's name" value={this.partnerName()} onChangeText={(str) => this.onPartnerName(str)} />
      </Form>
        </Container>
        <Container height = {4}>
      <SubTitle>Couple Date</SubTitle>
      <Form>
      <FormInputTouch>
      <DatePicker
      style={{width:200}}
      customStyles={{
        dateInput: {
          borderWidth: 0,
          alignItems: 'flex-start',
          justifyContent: 'center'
        },
        dateText: {
          color: '#33',
          paddingLeft: 10,
          fontSize: 12,
        }
      }}
      placeholder="Enter date"
        date={this.firstDate()}
        onDateChange={(newDate) => {
          this.setState({date: newDate})
        }}
        mode='date'
        showIcon={false}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        maxDate={new Date()}
        minDate={new Date('1/1/2000')}
        timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
      </FormInputTouch>
      </Form>
      </Container>
      <Container  style = {{bottom: 48}} height ={3}>
      {this.renderSaveButton()}
      {this.renderResetButton()}
      </Container>
    </Container>
  );
 }
}
