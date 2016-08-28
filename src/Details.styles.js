import React from 'react-native'

export default React.StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
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
    fontSize: 10,
  },
  FormContainer: {
    flex: 4,
  },
  Form: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius:5,
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
  },
});

