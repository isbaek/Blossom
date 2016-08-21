import React, { Component } from 'react';
import { connect } from 'react-redux';

import Details from './Details'

class App extends Component {
  render() {
    return (
      <Details {...this.props} />
    );
  }
}

export default connect(
  (state) => ({
    couple: state.couple,
    dates: state.dates,
  }),
  (dispatch) => ({
    editCouple: (newCouple) => dispatch({ type: 'EDIT_COUPLE', payload: { couple: newCouple }}),
  })
)(App)
