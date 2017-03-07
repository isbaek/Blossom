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
  Dimensions,
} from 'react-native'

// Custom Vector Icons
import Icon from 'react-native-vector-icons/Ionicons';

// Navigation Bar
import NavigationBar from 'react-native-navbar'

import Home from './Home'
import CalendarPage from './CalendarPage'
import Settings from './Settings'

//import extended stylesheet
import EStyleSheet from 'react-native-extended-stylesheet';
//set rem based on screen size
let {height, width} = Dimensions.get('window');
EStyleSheet.build({styles, rem: width > 400 ? 18 : 16});




export default function TopBar(props) {
  return (
    <View>
      <NavigationBar
        containerStyle = {styles.navBar}
        tintColor = '#FF4981'
        statusBar = {{style: "light-content"}}
        title = {{title: 'Blossom', tintColor: '#FFF', style: styles.title }}
        {...props}
      />
   </View>
 );
}

const styles = EStyleSheet.create({
  Container: {
    flex: 1,
  },

  '@media (max-width: 350)' : {
      navBar: {
        maxHeight: '2.5rem'
      },
      title: {
        fontSize: '0.9rem',
        paddingBottom: '2.5rem'
      },

  },

});
