import React from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },

'@media (max-width: 350)' : {
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
    color: '#333',
  },

  HighlighedIconActiveText: {
    color: '#333'
  },

  Notes: {
    borderRadius: 5,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    margin: 10,
    minHeight: '5rem',
  },
  NotesInput: {
    padding: 5,
    minHeight: '5rem',
    flex: 1,
    color: '#bbb',
    fontSize: '0.75rem',
  },
  //date section
  day: {
    fontSize: '2.5rem'
  },
  month: {
    fontSize: '1.25rem',
    color: '#777',
  },
  year: {
    fontSize: '1.25rem',
    color: '#444',
  },
  //Button
  deleteButton: {
    marginTop: '0.5rem',
    marginRight: '1.25rem',
    marginLeft: '1.25rem'
  },

  button: {
    marginTop: '1rem',
    marginRight: '1.25rem',
    marginLeft: '1.25rem'
  },

  deleteButtonText: {
    alignItems: 'center',
    color: 'red',
    fontSize: '0.75rem'
  },

  buttonText: {
    alignItems: 'center',
    color: '#fff',
    fontSize: '0.75rem'
  },

  navBar: {
    top: -20
  },

},

//iphone 5
'@media (max-width: 350) and (min-height: 400)'  : {
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
    color: '#333',
  },

  HighlighedIconActiveText: {
    color: '#333'
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
    fontSize: 15,
  },
  //date section
  day: {
    fontSize: 50,
  },
  month: {
    fontSize: 20,
    color: '#777',
  },
  year: {
    fontSize: 20,
    color: '#444',
  },
  //Button
  deleteButton: {
    marginTop:  15,
    marginRight: 20,
    marginLeft: 20
  },

  button: {
    marginTop: 15,
    marginRight: 20,
    marginLeft: 20,
  },

  deleteButtonText: {
    alignItems: 'center',
    color: 'red',
    fontSize: 15,
  },

  buttonText: {
    alignItems: 'center',
    color: '#fff',
    fontSize: 15,
  },

  navBar: {
    top: 0,
  },

}
});

export default styles
