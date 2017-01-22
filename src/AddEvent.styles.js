import React from 'react-native'

export default React.StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },

  HighlighedIcon: {
    flex: 1,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },

  HighlighedIconActive: {
    backgroundColor: '#FF4981',
  },

  Notes: {
    borderRadius: 5,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    margin: 10,
    minHeight: 120,
  },
  NotesInput: {
    padding: 5,
    minHeight: 120,
    flex: 1,
    color: '#bbb',
    fontSize: 16,
  }
});
