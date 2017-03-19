import React from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from './Icons'



const styles = EStyleSheet.create({
  '@media (max-width: 350) and (max-height: 380)': {
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
},

//iphone 5
'@media (max-width: 350) and (min-height: 400)' : {
    EventTypeIcon: {
      backgroundColor: "#fff",
      color: "#333",
      borderRadius: 15,
      padding: 7,
      fontSize: 15,
      width: 28,
      height: 28,
      textAlign: "center",
      overflow: 'hidden',
    },
  },

  //iphone 6
'@media (max-width: 400) and (min-height: 550)': {
      EventTypeIcon: {
        backgroundColor: "#fff",
        color: "#333",
        borderRadius: 15,
        padding: 7,
        fontSize: 16,
        width: 30,
        height: 30,
        textAlign: "center",
        overflow: 'hidden',
      },
    },
})

export default styles
