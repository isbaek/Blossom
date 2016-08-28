import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Icons.styles'

const COLORS = {
  RED: "#FE3824",
  ORANGE: "#FF9600",
  YELLOW: "#FFCD00",
  GREEN: "#44DB5E",
  BLUE: "#0076FF",
};

function EventTypeIcon(props) {
  return <Icon.Button
    name={props.icon}
    color={props.color}
    iconStyle={[styles.EventTypeIcon, {backgroundColor: props.color, color: '#fff'}]}
    backgroundColor={"white"}
    borderRadius={50}
  >{props.text}</Icon.Button>;
}

function IconFight(props) {
  return <EventTypeIcon icon={"ios-thunderstorm"} color={COLORS.RED && "#FF4981"} text="Fight" />;
}

function IconNightIn(props) {
  return <EventTypeIcon icon={"ios-pizza"} color={COLORS.ORANGE && "#FF4981"} text="NightIn" />;
}

function IconNightOut(props) {
  return <EventTypeIcon icon={"ios-bowtie"} color={COLORS.YELLOW && "#FF4981"} text="NightOut" />;
}

function IconSex(props) {
  return <EventTypeIcon icon={"ios-heart"} color={COLORS.GREEN && "#FF4981"} text="Sex" />;
}

function IconAll(props) {
  return <EventTypeIcon icon={"ios-analytics"} color={COLORS.BLUE && "#FF4981"} text="All Activities" />;
}

export default {
    All: IconAll,
    Sex: IconSex,
    Fight: IconFight,
    NightIn: IconNightIn,
    NightOut: IconNightOut,
}