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
  },


  FormInput: {
    padding: 15,
    flex: 1,
    margin: 5,
    fontSize: 17,
    color: '#DBDBDB',
    borderRadius: 5,
    backgroundColor:'#DBDBDB',
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
