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
import TabBar from './TabBar'
import styles from './Details.styles'

import blossomimg from '../design/blossom.jpg'

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
  return <View style={styles.FormInput}>{props.children}</View>;
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
      date: new Date(),
      datePicker: false,
    };
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
    return this.props.couple.firstDate || (this.state && this.state.date) || new Date();
  }

  onSave() {
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

  navigate() {
    this.props.navigator.push({
      name: 'TabBar',
      component: TabBar,
      //Passes data that user inputed
      passProps: {
        yourName: this.state.yourName,
        partnerName: this.state.partnerName,
        firstDate: this.state.date,
      },
    })
  }

  renderDatePicker() {
    return (
      <View style = {styles.datePicker}>
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
    if(this.state.datePicker) {
      return this.renderDatePicker();
    }
    return (
      <Button onPress={() => this.onSave()}>Start</Button>
    );
  }

  render() {
    return (
      <Container>
        <BackgroundImage source={blossomimg} />
        <Container height={4}>
          <Title>Details</Title>
          <Subtitle>Write down your love details</Subtitle>
        </Container>
        <Container height={4} style={{justifyContent: 'flex-start'}}>
        <Form>
          <FormInput value={this.yourName()} placeholder="Your name" onChangeText={(str) => this.onName(str)} />
          <FormInput value={this.partnerName()} placeholder="Partner's name" onChangeText={(str) => this.onPartnerName(str)} />
          <FormField>
          <TouchableWithoutFeedback onPress={this.toggleDatePicker.bind(this)}>
            <View value={this.state.date}>
              <Text style = {{color: '#8F8E94'}}> {(this.state.date.getMonth()+1)}/{this.state.date.getDate()}/{this.state.date.getFullYear()}</Text>
            </View>
          </TouchableWithoutFeedback>
          </FormField>
        </Form>
        </Container>
        <Container height={2}>
          {this.renderButtonOrDatePicker()}
        </Container>
      </Container>
    );
  }
}

export default Details;
