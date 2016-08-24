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
import styles from './styles'


var blossomimg = require('../design/blossom.jpg')

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
      <TouchableHighlight style = {styles.button} onPress = {() => this.onSave()}>
        <Text style = {{color: '#FFF'}}> Start </Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
          <Image source = {blossomimg} resizeMode='contain' style= {{position:'absolute'}}></Image>
            <View style= {styles.detailsTop}>
            <Text style = {{fontSize: 30, color: 'white', alignItems: 'center'}}> Details </Text>
            <Text style = {{fontSize: 15, color: 'white', alignItems: 'center'}}> Write down your love details </Text>
            </View>
        <View style = {styles.textContainer}>
        <TextInput style={styles.nameInput} value={this.yourName()} placeholder="Your name" placeholderTextColor= 'white' onChangeText={(str) => this.onName(str)} />
        <TextInput style={styles.nameInput} value={this.partnerName()} placeholder="Partner's name" placeholderTextColor= 'white' onChangeText={(str) => this.onPartnerName(str)} />
        <View style = {styles.nameInput}>
        <TouchableWithoutFeedback onPress={this.toggleDatePicker.bind(this)}>
          <View value={this.firstDate()}>
            <Text style = {{color: 'white'}}> {(this.firstDate().getMonth()+1)}/{this.firstDate().getDate()}/{this.firstDate().getFullYear()}</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
        </View>
        {this.renderButtonOrDatePicker()}
      </View>
    );
  }
}

export default Details;
