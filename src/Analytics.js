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
import styles from './Analytics.styles'
import TopBar from './TopBar'

// Calendar Library
import moment from 'moment'
// Custom Vector Icons
import Icon from 'react-native-vector-icons/Ionicons'

////
// Components
////

function Pill(props) {
  var style = [styles.Pill];
  if(props.active) {
    style = style.concat(styles.PillActive);
  }
  if(props.first) {
    style = style.concat(styles.PillFirst);
  }
  if(props.last) {
    style = style.concat(styles.PillLast);
  }

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={style}>
      <Text style={(props.active ? styles.PillActiveText : styles.PillText)}>{props.value}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

function PillBar(props) {
  return (
    <View style={styles.PillBar}>
      {props.options.map((option, idx) => {
        const first = idx === 0;
        const last = idx === (props.options.length - 1);
        const active = idx === props.activeIdx;
        return <Pill active={active} first={first} last={last} value={option} onPress={() => {props.onPress(idx)}} />;
      })}
    </View>
  );
}

////
// Utility functions
////



////
// Analytics
////

export default class Analytics extends Component {
  constructor (props) {
  super (props);
    this.state = {
      activeIdx: 0,
    };
  }

  // onPillBar is trigerred when PillBar changes index
  onPillBar(idx) {
    this.setState({
      activeIdx: idx,
    })
  }

  render() {
    return (
      <View>
        <TopBar/>
        <PillBar options={['All time', 'Last 3 months', 'Last week']} activeIdx={this.state.activeIdx} onPress={(idx) => this.onPillBar(idx)} />
      </View>
    );
 }
}
