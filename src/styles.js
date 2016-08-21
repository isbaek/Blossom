import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  detailsTop: {
    backgroundColor: '#FABE3B',
    height: 280,
    alignItems: 'center',
  },

  nameInput: {
    alignItems: 'flex-start',
    justifyContent : 'flex-start',
    backgroundColor: "#EDEDED",
    padding: 20,
    color: "#8F8E94",
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
  },

  datePicker : {
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 220,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },

  button : {
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#FF4981',
    marginTop: 40,
    padding: 8,
  },

    tabContent: {
    flex: 1,
    alignItems: 'center',
  },

  moody: {
    height: 150,
    width: 150,
    alignItems: 'center',
    marginBottom: 200,
  },

  calendarStyle: {
    flex:1,

  },

  calendarBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },

settingInput: {
  alignItems: 'flex-start',
  justifyContent : 'flex-start',
  backgroundColor: "#EDEDED",
  padding: 20,
  color: "#8F8E94",
  marginLeft: 40,
  marginRight: 40,
  marginTop: 10,
  borderRadius: 5,
},

settingDescription: {
  backgroundColor : '#FF4981',
  color: '#FFF',
  fontSize: 12,
  padding: 5,
  borderRadius: 5,
  marginTop: 10,

}
});

export default styles;