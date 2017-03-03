import React from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({

  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },

'@media (max-width: 350)' : {
  TitleText: {
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  Title: {
    fontSize: '1.5rem',
  },
  SubTitle: {
    fontSize: '0.75rem',
  },
  FormContainer: {
    flex: 4,
  },
  Form: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: '0.32rem',
    margin: '0.62rem',
    padding: '0.62rem',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '10rem',
  },
  FormInput: {
    padding: '0.75rem',
    flex: 1,
    margin: '0.32rem',
    fontSize: '0.75rem',
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#fff',
    borderRadius: 5,
  },
  DateInput: {
    padding: '0.75rem',
    flex: 1,
    margin: '0.32rem',
    fontSize: '0.75rem',
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#fff',
    borderRadius: 5,
  },
  ButtonContainer: {
   flex: 1,
  },
  Button: {
    backgroundColor: "#333",
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: 5,
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '0.75rem',
  },
  DatePicker: {
    backgroundColor: '#fff',
  }
},

});

export default styles
