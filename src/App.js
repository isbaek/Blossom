import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import { connect } from 'react-redux';

import Home from './Home'
import Details from './Details'
import CalendarPage from './CalendarPage'
import Analytics from './Analytics'
import AddEvent from './AddEvent'
import TabBar from './TabBar'

class Loading extends React.Component {
  render() {
    return <Text>Loading ...</Text>
  }
}

class App extends React.Component {
  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.VerticalUpSwipeJump
    }

    return Navigator.SceneConfigs.PushFromRight
  }

  route(title, component) {
    return {
      title,
      component,
    };
  }

  needsCoupleInfo() {
    const c = this.props.couple;
    return (
      c.firstDate === null ||
      c.you.name === "" ||
      c.partner.name === ""
    );
  }

  initialRoute() {
    //return this.route('AddEvent', AddEvent);
    if(this.needsCoupleInfo()) {
      return this.route('Details', Details);
    }
    return this.route('TabBar', TabBar);
  }

  render() {
    if(this.props.loading) {
      return <Loading />;
    }

    return (
      <Navigator
      initialRoute={this.initialRoute()}
      configureScene={this.configureScene}
      renderScene={(route, navigator) => {
        if (route.component) {
          return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route} )}
        }
      }
    />
  );
  }
}

////
// Cleaning functions
////

function cleanCouple(couple) {
  if(typeof couple.firstDate === 'string') {
    return {
        ...couple,
        firstDate: (new Date(couple.firstDate)),
    };
  }
  return couple;
}

function cleanEvent(event) {
  if(typeof event.date === 'string') {
    return {
        ...event,
        date: (new Date(event.date)),
    };
  }
  return event;
}

function cleanState(state) {
  return {
    couple: cleanCouple(state.couple),
    events: state.events.map(cleanEvent),
  };
}

export default connect(
  cleanState,
  (dispatch) => ({
    editCouple: (newCouple) => dispatch({ type: 'EDIT_COUPLE', payload: { couple: newCouple }}),
    addEvent: (newEvent) => dispatch({ type: 'ADD_EVENT', payload: { event: newEvent }}),
    resetAll: (resetAll) => dispatch({ type: 'RESET_ALL'})
  })
)(App)
