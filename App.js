import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Routes from './src/routes'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './src/reducers'

export default class App extends Component {
  render() {
    const store = createStore(
      reducer,
      applyMiddleware(thunk)
    );
    
    return ( 
      <Provider store={store} >
        <View style={styles.container}>
          <StatusBar backgroundColor='#1a3d6a' barStyle='light-content'/>
          <Routes />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
})