/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
    console.log('constructor called');
  }
  componentDidMount() {
    console.log('component mounted');
  }
  render() {
    return (<View key='main-key'><Text>Main Component</Text></View>);
  }
}
Main.exportedProp = 'exportedProp';
export default Main;
