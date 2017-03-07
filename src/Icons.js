import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Dimensions,
  Text
} from 'react-native'

//import extended stylesheet
import EStyleSheet from 'react-native-extended-stylesheet';
//set rem based on screen size
let {height, width} = Dimensions.get('window');
EStyleSheet.build({styles, rem: width > 400 ? 18 : 16});

import styles from './Icons.styles'

const COLORS = {
  RED: "#FE3824",
  ORANGE: "#FF9600",
  YELLOW: "#FFCD00",
  GREEN: "#44DB5E",
  BLUE: "#0076FF",
};

function EventTypeIcon(props) {
  var bgColor = props.color;
  var textColor = "#fff";
  if(props.inverted) {
    bgColor = "#fff";
    textColor = props.color;
  }

  return <Icon.Button
    {...props}
    name={props.icon}
    color={bgColor}
    iconStyle={[styles.EventTypeIcon, {backgroundColor: bgColor, color: textColor}]}
    backgroundColor={textColor}
    borderRadius={50}><Text style={styles.iconText}>{props.text}</Text></Icon.Button>;
}

function IconFight(props) {
  return <EventTypeIcon icon={"ios-thunderstorm"} color={COLORS.RED && "#FF4981"} text={props.text} {...props} />;
}

function IconNightIn(props) {
  return <EventTypeIcon icon={"ios-pizza"} color={COLORS.ORANGE && "#FF4981"} text={props.text} {...props} />;
}

function IconNightOut(props) {
  return <EventTypeIcon icon={"ios-bowtie"} color={COLORS.YELLOW && "#FF4981"} text={props.text} {...props} />;
}

function IconSex(props) {
  return <EventTypeIcon icon={"ios-heart"} color={COLORS.GREEN && "#FF4981"} text={props.text} {...props} />;
}

function IconAll(props) {
  return <EventTypeIcon icon={"ios-analytics"} color={COLORS.BLUE && "#FF4981"} text="All Activities" {...props} />;
}

export default {
    All: IconAll,
    Sex: IconSex,
    Fight: IconFight,
    NightIn: IconNightIn,
    NightOut: IconNightOut,
}
