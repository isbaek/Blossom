import React from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  '@media (max-width: 350)': {
  EventTypeIcon: {
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 15,
    padding: '0.5rem',
    fontSize: '0.75rem',
    width: '1.7rem',
    height: '1.7rem',
    textAlign: "center",
    overflow: 'hidden',
  },
  iconText: {
    fontSize: '0.75rem',
    color: "#FF4981"
  }
},
})

export default styles
