  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
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
import styles from './src/styles'
import Details from './src/Details'
import TabBar from './src/TabBar'

//INITIAL
class Project extends Component {
  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.VerticalUpSwipeJump
    }

    return Navigator.SceneConfigs.PushFromRight
  }

  render () {
    return (
      <Navigator
        initialRoute={{
          title: 'Details',
          component: Details,
        }}
        configureScene={this.configureScene}
        renderScene={(route, navigator) => {
          console.log(route, navigator);
          if (route.component) {
            return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route} )}
          }
        }
        />
    );
  }
}

AppRegistry.registerComponent('newBlossom', () => Project);
