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

class Details extends Component {
  constructor() {
    super();
    this.state = {
      yourName: "",
      partnerName: "",
      date: new Date(),
      datePickerMode: 'hidden',
    };
  }

  toggleDatePicker() {
    var mode = this.state.datePickerMode == 'hidden' ? 'visible' : 'hidden';
    this.setState ({datePickerMode : mode});
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

  navigate() {
    this.props.navigator.push({
      name: 'TabBar',
      component: TabBar,
      //Passes data that user inputed
      passProps: {
        yourName: this.state.yourName,
        partnerName: this.state.partnerName,
        date: this.state.date,

      },
    })
  }

  render() {
       var datePicker =  (
      <View style = {styles.datePicker}>
    <TouchableOpacity onPress = {this.toggleDatePicker.bind(this)} style = {{padding : 5, alignItems: 'flex-end'}}>
      <Text>Done</Text>
      </TouchableOpacity>
        <DatePickerIOS
                  date={(this.state && this.state.date) || new Date()}
                  onDateChange={(newDate) => {
                    this.setState({date: newDate})
                  }}
                  mode={'date'}
                  timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
        </View>
    );


    return (
          <View style={styles.container}>
          <View style = {styles.detailsTop}>
          <Text style = {{fontSize: 30, color: 'white', top: 170, borderRadius: 5,}}> Details </Text>
          <Text style = {{fontSize: 13, color: 'white', top: 180}}> Write down your love details </Text>
          </View>
        <TextInput style={styles.nameInput} value={this.state.yourName} placeholder="Your name" onChangeText={(str) => this.onName(str)} />
        <TextInput style={styles.nameInput} value={this.state.partnerName} placeholder="Partner's name" onChangeText={(str) => this.onPartnerName(str)} />
        <View style = {styles.nameInput}>
        <TouchableWithoutFeedback onPress = {this.toggleDatePicker.bind(this)}>
        <View value = {this.state.date}>
          <Text style = {{color: '#8F8E94'}}> {(this.state.date.getMonth()+1)}/{this.state.date.getDate()}/{this.state.date.getFullYear()}</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
        {this.state.datePickerMode == 'visible' ? datePicker : false}
        <TouchableHighlight style = {styles.button} onPress = {() => this.navigate('yourName', 'partnerName', 'date' )}>
       <Text style = {{color: '#FFF'}}> Start </Text>
       </TouchableHighlight>

      </View>
    );
  }
}

export default Details;
