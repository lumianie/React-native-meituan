/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Main from './Main'
import {
  View
} from 'react-native'

export default class App extends Component {
  render() {
    console.ignoredYellowBox = ['Remote debugger']
    return (
      <Main />
    );
  }
}
