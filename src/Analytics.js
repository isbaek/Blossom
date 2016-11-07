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
  SegmentedControlIOS,
  StyleSheet,
  ScrollView,
} from 'react-native'
import styles from './Analytics.styles'
import TopBar from './TopBar'
import Icons from './Icons'

// Calendar Library
import moment from 'moment'
import Chart from 'react-native-chart';

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

function BasicChart(props) {
  return (
  <View style={styles.ChartContainer}>
    <Chart
        style={styles.Chart}
        verticalGridStep={5}
        type="bar"
        showDataPoint={true}
        showXAxisLabels={true}
        hideHorizontalGridLines={true}
        hideVerticalGridLines={true}
        color="#FF4981"
        fillColor="#FF4981"
        cornerRadius={3}

        data={props.data}
        xAxisTransform={props.xAxisTransform}
     />
  </View>
  );
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function axisTickMonths(monthsPerTick) {
  return function xAxis(idx) {
    const monthIdx = idx % 12;
    const month = MONTHS[monthIdx];
    if(idx % monthsPerTick === 0) {
      return month;
    }
    return "";
  };
}

class PerMonthChart extends Component {
  xAxis(months) {
    if(months <= 12) {
      return axisTickMonths(1);
    } else if(months <= 24) {
      return axisTickMonths(2);
    } else if(months <= 36) {
      return axisTickMonths(3);
    }
    return axisTickMonths(6);
  }

  render() {
    const nMonths = this.props.data.length;
    return <BasicChart data={this.props.data} xAxisTransform={this.xAxis(nMonths)} />;
  }
}

class WeekChart extends Component {
  xAxis(value) {
    return "";
  }

  render() {
    return <BasicChart data={this.props.data} xAxisTransform={this.xAxis.bind(this)} />;
  }
}


class TrimesterChart extends Component {
  xAxis(value) {
    return "";
  }

  render() {
    return <BasicChart data={this.props.data} xAxisTransform={this.xAxis.bind(this)} />;
  }
}


////
// Utility functions
////

// nZeroes returns an array of size n filled with zeroes
function nZeroes(n) {
  var arr = [];
  for(var i = 0; i < n; i++) {
    arr.push([i, Math.floor((Math.random() * 20))]);
  }
  return arr;
}

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
      <View style={{flex: 1}}>
        <TopBar/>
        <ScrollView containerStyle={{flex: 1}}>
          <View style={styles.PillBar}>
            <SegmentedControlIOS
              values={['All time', 'Last 3 months', 'Last week']}
              selectedIndex={this.state.activeIdx}
              onChange={(event) => {
                this.onPillBar(event.nativeEvent.selectedSegmentIndex);
              }}
              tintColor="#FF4981"
              style={{flex: 1}}
            />
          </View>
          {
          //<PillBar options={['All time', 'Last 3 months', 'Last week']} activeIdx={this.state.activeIdx} onPress={(idx) => this.onPillBar(idx)} />
          }
          <Icons.All />
          <View>
            <PerMonthChart data={nZeroes(12)} />
          </View>
          <Icons.Sex />
          <View>
            <PerMonthChart data={nZeroes(12)} />
          </View>
          <Icons.Fight />
          <View>
            <PerMonthChart data={nZeroes(12)} />
          </View>
          <Icons.NightOut />
          <View>
            <PerMonthChart data={nZeroes(12)} />
          </View>
          <Icons.NightIn />
          <View>
            <PerMonthChart data={nZeroes(12)} />
          </View>
        </ScrollView>
      </View>
    );
 }
}
