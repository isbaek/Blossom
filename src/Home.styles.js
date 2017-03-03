import React from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({


  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  LovingDays: {
    textAlign: 'center',

  },

'@media (max-width: 350)' : {
  LovingDaysNumber: {
    color: 'white',
    borderRadius: 20,
    padding: '0.5rem',
    backgroundColor: '#FF4981',
    fontSize: '4rem',
    fontWeight: 'bold',
    overflow: 'hidden',
  },

  LovingDaysText: {
    fontSize: '0.75rem',
    color: 'white',
  },

  LovingDaysCoupleText: {
    fontSize: '0.75rem',
    color: '#FF4981',
    margin: '1rem',
  },

  MoodTodayText: {
    color: '#FF4981',
    fontSize: '0.75rem',

  },

  MoodTodayImage: {
    height: '6rem',
    width: '6rem',
  },

},
});

export default styles
