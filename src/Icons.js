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

// Style an icon's text according to a given color
function iconTextStyle(color) {
  // We have to wrap this in an EStyleSheet.create call
  // because react-native doesn't natively understand the 'rem' font-size unit
  return EStyleSheet.create({
    '@media (max-width: 350) and (max-height: 470)' :{
        abc: {
          color: color,
          fontSize: 15,
        }
      },
      '@media (max-width: 350) and (max-height: 380)':{
        abc: {
          color: color,
          fontSize: '0.75rem',
        }
      },
      '@media (min-width: 375) and (min-height: 550)' : {
        abc: {
          color: color,
          fontSize: 16,
        }
      },
    }).abc;
}

function EventTypeIcon(props) {
  // Default background color
  const DEFAULT_BG = "#fff";

  // By default background is white/transparent
  var bgColor = DEFAULT_BG;
  var textColor = props.color;
  // Invert colors if icon is active/selected
  if(props.active) {
    bgColor = props.color;
    textColor = DEFAULT_BG;
  }

  return <Icon.Button
    {...props}
    name={props.icon}
    color={textColor}
    iconStyle={[styles.EventTypeIcon, {backgroundColor: textColor, color: bgColor}]}
    backgroundColor={bgColor}
    borderRadius={50}><Text style={iconTextStyle(textColor)}>{props.text}</Text></Icon.Button>;
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
