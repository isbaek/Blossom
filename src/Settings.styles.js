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

'@media (max-width: 350) and (max-height: 380)'  : {
  SubTitle: {
    fontSize: '0.8rem',
    color: '#333',
    marginLeft: '1.2rem',
    marginRight: '1.2rem',
    fontWeight: "bold",
  },

  Form: {
    flex: 1,
    padding: 10,
    marginLeft: '1.2rem',
    marginRight: '1.2rem',
    marginBottom: 0,
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
    marginBottom: '0.5rem',
    marginLeft: '1.2rem',
    marginRight: '1.2rem',
    borderRadius: 5,
  },

  ResetButton: {
    padding: '0.75rem',
    marginLeft: '1.2rem',
    marginRight: '1.2rem',
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
  dateSize:{
    color: '#333',
    paddingLeft: 10,
    fontSize: 12,
  }
},

'@media (max-width: 350) and (min-height: 400)'  : {
  SubTitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
  },

  Form: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 0,
  },

  FormInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 15,
    color: '#333',
  },

  FormInputTitle: {
    fontWeight: 'bold',
    color: '#888',
    fontSize: 15,
  },
  FormInputHolder: {
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    minHeight: 60
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
    padding: 12,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },

  ResetButton: {
    padding: 12,
    marginLeft: 20,
    marginRight: 20,
    //margin: '0.3rem',
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },

  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15
  },
  ResetButtonText: {
    color: '#FF0000',
    textAlign: 'center',
    fontSize: 15
  },

  DatePicker: {
    backgroundColor: '#fff',
  },

  dateSize:{
    color: '#333',
    paddingLeft: 10,
    fontSize: 15,
  }
},

});

export default styles
