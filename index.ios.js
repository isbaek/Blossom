import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
} from 'react-native'
import { Provider, connect } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'

import App from './src/App'
import createStore from './src/store/createStore'

const store = createStore();


class Blossom extends Component {
  constructor() {
    super()
    this.state = { loading: true }
    this.persistor = null;
  }

  componentWillMount(){
    this.persistor = persistStore(store, {storage: AsyncStorage}, () => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <Provider store={store} persistor={this.persistor}>
        <App loading={this.state.loading} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('newBlossom', () => Blossom);
