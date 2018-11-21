import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Routes from './src/routes'

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#1a3d6a' barStyle='light-content'/>
          <Routes />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
})