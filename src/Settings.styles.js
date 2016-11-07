import React from 'react-native'

export default React.StyleSheet.create({
  Container: {
    flex: 1,
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
    margin: 10,
    padding: 10,
    marginTop: 0,
    paddingTop: 0,
    minHeight: 150,
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
    flex: 1,
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
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
  DatePicker: {
    backgroundColor: '#fff',
  }
});
