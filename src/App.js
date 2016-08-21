import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import { connect } from 'react-redux';

import Home from './Home'
import Details from './Details'
import CalendarPage from './CalendarPage'

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

  initialRoute() {
    const c = this.props.couple;
    const newApp = (
      c.firstDate === null ||
      c.you.name === "" ||
      c.partner.name === ""
    );
    if(newApp) {
      return this.route('Details', Details);
    }
    return this.route('Home', Home);
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
        console.log(route, navigator);
        if (route.component) {
          return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route} )}
        }
      }
    />
  );
  }
}

function cleanState(state) {
  if(typeof state.couple.firstDate === 'string') {
    return {
      ...state,
      couple: {
        ...state.couple,
        firstDate: (new Date(state.couple.firstDate)),
      },
    };
  }
  return state;
}

export default connect(
  cleanState,
  (dispatch) => ({
    editCouple: (newCouple) => dispatch({ type: 'EDIT_COUPLE', payload: { couple: newCouple }}),
  })
)(App)
