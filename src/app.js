import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App;
