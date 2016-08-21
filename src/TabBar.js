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

// Custom Vector Icons
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home'
import CalendarPage from './CalendarPage'
import Settings from './Settings'

export default class TabBar extends Component {

  constructor (props) {
  super (props);
    this.state = {
      selectedTab: 'Home',
  };
    }
    render () {
    return (
    <TabBarIOS tintColor='#FF4981'>
      <Icon.TabBarItem
        title="Home"
        selected = {this.state.selectedTab === 'Home'}
        iconName="ios-home-outline"
        selectedIconName="ios-home"
        onPress={() => {
          this.setState({
            selectedTab: 'Home',
          });
      }}>
        <Home yourName= {this.props.yourName}
              partnerName= {this.props.partnerName}
              date = {this.props.date} />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        title="Calendar"
        selected = {this.state.selectedTab === 'CalendarPage'}
        iconName="ios-calendar-outline"
        selectedIconName="ios-calendar"
        onPress={() => {
          this.setState({
            selectedTab: 'CalendarPage',
          });
        }}>
          <CalendarPage navigator = {this.props.navigator}/>
      </Icon.TabBarItem>
      <Icon.TabBarItem
        title="Settings"
        selected = {this.state.selectedTab === 'Settings'}
        iconName="ios-settings-outline"
        selectedIconName="ios-settings"
        onPress={() => {
          this.setState({
            selectedTab: 'Settings',
          });
        }}>
          <Settings  yourName= {this.props.yourName}
             partnerName= {this.props.partnerName}
             date = {this.props.date} />
      </Icon.TabBarItem>
    </TabBarIOS>
  );
  }
};