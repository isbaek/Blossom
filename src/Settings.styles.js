import React from 'react-native'

export default React.StyleSheet.create({
  Container: {
    flex: 1,
    flexWrap: 'nowrap',
    backgroundColor: 'white',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  SubTitle: {
    fontSize: 17,
    color: '#333',
    margin: 20,
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
    fontSize: 15,
    color: '#333',
  },

  FormInputTitle: {
    fontWeight: 'bold',
    color: '#888',
  },
  FormInputHolder: {
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    minHeight: 60,
  },
  DateInputHolder: {
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    minHeight: 50,
  },
  ButtonContainer: {
   flex: 1,
  },
  Button: {
    backgroundColor: "#333",
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },

  ResetButton: {
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },

  ButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  DatePicker: {
    backgroundColor: '#fff',
  }
});
