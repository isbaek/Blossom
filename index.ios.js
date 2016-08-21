  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
const persistor = persistStore(store, {storage: AsyncStorage});

class Blossom extends Component {
  render() {
    return (
      <Provider store={store} persistor={persistor}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('newBlossom', () => Blossom);
