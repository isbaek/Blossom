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
import Analytics from './Analytics'
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
        <Home {...this.props} />
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
          <CalendarPage {...this.props} />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        title="Analytics"
        selected = {this.state.selectedTab === 'Analytics'}
        iconName="ios-analytics-outline"
        selectedIconName="ios-analytics"
        onPress={() => {
          this.setState({
            selectedTab: 'Analytics',
          });
        }}>
          <Analytics {...this.props} />
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
          <Settings {...this.props} />
      </Icon.TabBarItem>
    </TabBarIOS>
  );
  }
};