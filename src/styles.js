import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },

  detailsTop: {
    //backgroundColor: '#FABE3B',
    height: 280,
    alignItems: 'center',
  },
  detailsForm: {
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    flex: 1,
  },
  nameInput: {
    flex: 1,
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: "#8F8E94",
    padding: 15,
    margin: 40,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    color: '#fff',
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
