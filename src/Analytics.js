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

/*function Pill(props) {
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
*/
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
const WEEKS = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

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

function axisTickWeek(dayPerTick) {
  return function xAxis(idx) {
    const weekIdx = idx % 7;
    const week = WEEKS[weekIdx];
    if(idx % dayPerTick === 0) {
      return week;
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
  xAxis(days) {
    if(days <= 7) {
      return axisTickWeek(1);
    } else if(days <= 14) {
      return axisTickWeek(2);
    } else if(days <= 21) {
      return axisTickWeek(3);
    }
  }

  render() {
    const nWeek = this.props.data.length;
    return <BasicChart data={this.props.data} xAxisTransform={this.xAxis(nWeek)} />;
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

  renderMonthOrWeek() {
    if ( !this.state.activeIdx ) {
      return <PerMonthChart data={nZeroes(12)} />
    }
    else if ( this.state.activeIdx === 1 ) {
      return <PerMonthChart data={nZeroes(12)} />
    }
    else {
      return <WeekChart data={nZeroes(7)} />
    }
  }

  render() {
    return (
      <View style={styles.Container}>
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
            {this.renderMonthOrWeek()}
          </View>
          <Icons.Sex />
          <View>
            {this.renderMonthOrWeek()}
          </View>
          <Icons.Fight />
          <View>
            {this.renderMonthOrWeek()}
          </View>
          <Icons.NightOut />
          <View>
            {this.renderMonthOrWeek()}
          </View>
          <Icons.NightIn />
          <View>
            {this.renderMonthOrWeek()}
          </View>
        </ScrollView>
      </View>
    );
 }
}
