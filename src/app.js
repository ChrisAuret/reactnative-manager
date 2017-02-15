import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/loginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDJFw_tOniIKFi-Z8yshtzud0CtLxEeL4Q',
      authDomain: 'reactnative-manager-7b224.firebaseapp.com',
      databaseURL: 'https://reactnative-manager-7b224.firebaseio.com',
      storageBucket: 'reactnative-manager-7b224.appspot.com',
      messagingSenderId: '771444447590'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
