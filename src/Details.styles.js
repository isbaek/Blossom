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

'@media (max-width: 350) and (max-height: 380)' : {
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
  },
  dateSize: {
    fontSize: '0.75rem',
    color: "#fff"
  }
},

'@media (max-width: 350) and (max-height: 470)' : {
  TitleText: {
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  Title: {
    fontSize: 28,
  },
  SubTitle: {
    fontSize: 15,
  },
  FormContainer: {
    flex: 4,
  },
  Form: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 200,
  },
  FormInput: {
    padding: 15,
    flex: 1,
    margin: 5,
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#fff',
    borderRadius: 5,
  },
  DateInput: {
    padding: 15,
    flex: 1,
    margin: 5,
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#fff',
    borderRadius: 5,
  },
  ButtonContainer: {
   flex: 1,
  },
  Button: {
    backgroundColor: "#333",
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
  DatePicker: {
    backgroundColor: '#fff',
  },
  dateSize: {
    fontSize: 15,
    color: "#fff"
  }

},
//iphone 6
'@media (min-width: 375) and (min-height: 550)' : {
  TitleText: {
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  Title: {
    fontSize: 30,
  },
  SubTitle: {
    fontSize: 16,
  },
  FormContainer: {
    flex: 4,
  },
  Form: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 200,
  },
  FormInput: {
    padding: 16,
    flex: 1,
    margin: 5,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#fff',
    borderRadius: 5,
  },
  DateInput: {
    padding: 16,
    flex: 1,
    margin: 5,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#fff',
    borderRadius: 5,
  },
  ButtonContainer: {
   flex: 1,
  },
  Button: {
    backgroundColor: "#333",
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  DatePicker: {
    backgroundColor: '#fff',
  },
  dateSize: {
    fontSize: 16,
    color: "#fff"
  }

},



});

export default styles
