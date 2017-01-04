import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Navigator,
} from 'react-native'
import styles from './styles'

// Custom Vector Icons
import Icon from 'react-native-vector-icons/Ionicons';

// Navigation Bar
import NavigationBar from 'react-native-navbar'

import Home from './Home'
import CalendarPage from './CalendarPage'
import Settings from './Settings'

export default function TopBar(props) {
  return (
    <View>
      <NavigationBar
        tintColor = '#FF4981'
        statusBar = {{style: "light-content"}}
        title = {{title: 'Blossom', tintColor: '#FFF'}}
        {...props}
      />
   </View>
 );
}
