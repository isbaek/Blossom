import React from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  Container: {
    flex: 1,
    flexWrap: 'nowrap',
    backgroundColor: 'white',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

'@media (max-width: 350)' : {
  SubTitle: {
    fontSize: '0.8rem',
    color: '#333',
    margin: '1.2rem',
    fontWeight: "bold",
  },

  Form: {
    flex: 1,
    margin: 10,
    padding: 10,
    marginTop: 0,
    paddingTop: 0,
    //minHeight: 150,
  },

  FormInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: '0.75rem',
    color: '#333',
  },

  FormInputTitle: {
    fontWeight: 'bold',
    color: '#888',
    fontSize: '0.75rem',
  },
  FormInputHolder: {
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    minHeight: '4rem'
  },

  DateInputHolder: {
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    //maxHeight: '2rem'
  },

  ButtonContainer: {
   flex: 1,
  },
  Button: {
    backgroundColor: "#333",
    padding: '0.75rem',
    marginBottom: '0.3rem',
    marginLeft: '0.3rem',
    marginRight: '0.3rem',
    borderRadius: 5,
  },

  ResetButton: {
    padding: '0.75rem',
    marginLeft: '0.3rem',
    marginRight: '0.3rem',
    //margin: '0.3rem',
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },

  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '0.75rem'
  },
  ResetButtonText: {
    color: '#FF0000',
    textAlign: 'center',
    fontSize: '0.75rem'
  },

  DatePicker: {
    backgroundColor: '#fff',
  },
},

});

export default styles
