import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Weather from './src/Weather';

export default class App extends React.Component {
  render() {
    return (
        <Weather/>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#E8EAF6'
  }
});